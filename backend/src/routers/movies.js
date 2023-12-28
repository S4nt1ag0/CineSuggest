const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

router.get('/', moviesController.discovery);

router.get('/details', moviesController.details);

module.exports = router;
