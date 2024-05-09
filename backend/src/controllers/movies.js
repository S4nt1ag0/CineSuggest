const axios = require('axios');
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
let generesList = [];

function convertGenres(handlegenre) {
    const genreSelected = generesList.find(
        (genre) => genre.name.toLowerCase() == handlegenre
    );
    return genreSelected ? genreSelected.id : null;
}

module.exports = {
    loadGenres: async function () {
        const response = await axios.get('/genre/movie/list?language=en', {
            params: {
                api_key: process.env.API_KEY,
            },
        });
        if (response.data) {
            generesList = response.data.genres;
        }
    },
    discovery: async function (req, res, next) {
        const filters = req.query;
        let params = {
            api_key: process.env.API_KEY,
            sort_by: req.query.sortBy || 'popularity.desc',
            page: filters.page || 1,
            language: req.query.language || 'pt-BR',
        };
        let route = '/discover/movie';

        if (filters.text != '') {
            params.query = filters.text;
            route = '/search/movie';
        }
        if (filters.gender != '') {
            params.with_genres = convertGenres(filters.gender);
        }
        const response = await axios.get(route, {
            params,
        });
        res.send(response.data);
    },

    details: async function (req, res, next) {
        if (req.query.ID) {
            const response = await axios.get(`/movie/${req.query.ID}`, {
                params: {
                    api_key: process.env.API_KEY,
                    language: req.query.language || 'pt-BR',
                },
            });
            res.send(response.data);
        } else {
            res.send('ID não informado ou incorreto');
        }
    },
};
