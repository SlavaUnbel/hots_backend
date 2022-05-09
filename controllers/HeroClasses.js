const HeroClasses = require('../models/HeroClasses')

module.exports = { 
    getHeroClassesList: async (_, res) => {
        try {
            const heroClasses = await HeroClasses.find({});
            res.send(heroClasses);
        } catch (error) {
            console.log('Cannot get hero classes')
            res.send(error);
        }
    } 
}