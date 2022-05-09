const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

/** MongoDB connection */
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://SlavaLevkovich:Unbelievable19@hots-cluster.ccjbn.mongodb.net/hots?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server has been started on port ${PORT}`)
    }))
    .catch((err) => console.log(err));

/** CORS Middleware */
const cors = require('cors');
app.use(cors());

/** Maps route */
const mapsRouter = require('./routes/Maps');
app.use('/maps', mapsRouter);

/** Hero Classes route */
const heroClassesRouter = require('./routes/HeroClasses');
app.use('/hero-classes', heroClassesRouter);