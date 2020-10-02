'use strict';
const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get();
  res.status(200).send(people);
});
router.delete('/', (req, res) => {
  console.log('delete')
  People.dequeue();
  res.status(200).send('successful');
})
router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body;
  People.enqueue(person);
  res.status(201).json(person);
});

module.exports = router;
