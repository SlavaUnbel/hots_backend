const express = require('express');
const heroClassesRouter = express.Router();
const { getHeroClassesList } = require('../controllers/HeroClasses')

heroClassesRouter.get('/', getHeroClassesList);

module.exports = heroClassesRouter;
