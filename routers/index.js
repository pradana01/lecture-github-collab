const express = require('express');
const route = express.Router();
const Controller = require('../controllers');

route.get('/', (req, res) => {
    res.send("Ini home")
});

route.get('/register', Controller.register);

module.exports = route;