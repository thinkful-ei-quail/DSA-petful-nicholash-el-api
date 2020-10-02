'use strict';
const config = require('../config');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use(cors());

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));

module.exports = app;
