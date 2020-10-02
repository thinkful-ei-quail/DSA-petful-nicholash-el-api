'use strict';
const express = require('express');
const json = require('body-parser').json();
const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.getAll();
  res.status(200).send(pets);
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const {type} = req.body;
  console.log(type);
  Pets.dequeue(type);
  res.status(204).end();
});

module.exports = router;
