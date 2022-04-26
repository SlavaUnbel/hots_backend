const mongoose = require('mongoose');

const mapsSchema = new mongoose.Schema({
    mapName: {
        type: String,
        required: true,
    },
}, { collection: 'maps' });

module.exports = mongoose.model('Maps', mapsSchema);