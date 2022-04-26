const mongoose = require('mongoose');

const heroClassesSchema = new mongoose.Schema({
    heroClassName: {
        type: String,
        required: true,
    },
}, { collection: 'heroClasses' });

module.exports = mongoose.model('HeroClasses', heroClassesSchema);