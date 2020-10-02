'use strict';
const config = require('../config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: config.CLIENT_ORIGIN
}));

app.use('api/people', require('../people/people.router'));
app.use('api/pets', require('../pets/pets.router'));

module.exports = app;
