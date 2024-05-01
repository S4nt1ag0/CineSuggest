const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

const movies = require('./routers/movies.js');
app.use(
    cors({
        origin: '*',
    })
);
app.use('/movies', movies);

app.listen(3000, function () {
    console.log('Examplo app escutando requisições na porta 3000');
});
