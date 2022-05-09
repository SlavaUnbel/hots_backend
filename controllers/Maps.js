const Maps = require('../models/Maps')

module.exports = { 
    getMapsList: async (_, res) => {
        try {
            const maps = await Maps.find({});
            res.send(maps);
        } catch (error) {
            console.log('Cannot get maps')
            res.send(error);
        }
    } 
}