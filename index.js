const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://SlavaLevkovich:Unbelievable19@hots-cluster.ccjbn.mongodb.net/hots?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server has been started on port ${PORT}`)
    }))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 80;

/** Maps collection */
const Maps = require('./models/maps')
app.get('/maps', async (_, res) => {
    try {
        const maps = await Maps.find({});
        res.send(maps);
    } catch (error) {
        console.log('Cannot get maps')
        res.send(error);
    }
})

/** Hero Classes collection */
const HeroClasses = require('./models/heroClasses')
app.get('/heroClasses', async (_, res) => {
    try {
        const heroClasses = await HeroClasses.find({});
        res.send(heroClasses);
    } catch (error) {
        console.log('Cannot get hero classes')
        res.send(error);
    }
})

app.get('/', (_, res) => {
    res.end('<h1>Home Page</h1>')
})

app.get('/about', (_, res) => {
    res.end('<h1>About Page</h1>')
})