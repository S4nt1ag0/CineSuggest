const axios = require('axios')
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

module.exports = {
    discovery: async function(req, res, next){
        const response = await axios.get('/discover/movie', {
            params: { 
                api_key: process.env.API_KEY,
                sort_by: req.query.sortBy || 'popularity.desc',
                page: req.query.page || 1,
                language: req.query.language || 'pt-BR'
            }
        });
    
        res.send(response.data)
    },
 
    details: async function(req, res, next){
        if(req.query.ID){
            const response = await axios.get(`/movie/${req.query.ID}`, {
                params: { 
                    api_key: process.env.API_KEY,
                    language: req.query.language || 'pt-BR'
                }
            });
            res.send(response.data)
        }else{
            res.send("ID não informado ou incorreto")
        }

    }
}