const express = require('express');
const Logger = require('./middleware/logger');

const app = express();

app.use(express.json());

//logger middleware
app.use(Logger);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;