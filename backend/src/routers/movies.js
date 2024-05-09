const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');
moviesController.loadGenres();

router.get('/', moviesController.discovery);

router.get('/details', moviesController.details);

module.exports = router;
