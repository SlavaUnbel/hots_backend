const express = require('express');
const mapsRouter = express.Router();
const { getMapsList } = require('../controllers/Maps')

mapsRouter.get('/', getMapsList);

module.exports = mapsRouter;
