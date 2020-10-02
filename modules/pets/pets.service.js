'use strict';
const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => pets.cats.enqueue(cat));
store.dogs.forEach(dog => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    const nextDog = pets.dogs.show();
    const nextCat = pets.cats.show();
    return { dog: nextDog, cat: nextCat };
  },

  getAll() {
    const allDogs = pets.dogs.all();
    const allCats = pets.cats.all();
    return { dogs: allDogs, cats: allCats };
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue();
  }
};
