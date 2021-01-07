const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park 
  let tRex 
  let triceratops
  let velociraptor 
  let stegosaurus 
  let spinosaurus 
  let archaeopteryx
  let brachiosaurus
  let allosaurus 
  let apatosaurus
  let dilophosaurus 

  beforeEach(function () {
    park = new Park('Jurassic Park', 500);
    tRex = new Dinosaur('T-Rex', 'carnivore', 66);
    allosaurus = new Dinosaur('Allosaurus', 'carnivore', 20);
    apatosaurus = new Dinosaur('Apatosaurus', 'herbivore', 23);
    triceratops = new Dinosaur('Triceratops', 'herbivore', 53);
    stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 36);
    spinosaurus = new Dinosaur('Spinosaurus', 'carnivore', 24);
    velociraptor = new Dinosaur('Velociraptor', 'carnivore', 44);
    archaeopteryx = new Dinosaur('Archaeopteryx', 'carnivore', 50);
    dilophosaurus = new Dinosaur('Dilophosaurus', 'carnivore', 25);
    brachiosaurus = new Dinosaur('Brachiosaurus', 'herbivore', 58);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticket_price;
    assert.strictEqual(actual, 500)
  });

  it('should have a collection of dinosaurs', function () {
    park.dinosaurs.push(tRex, allosaurus, apatosaurus, triceratops, stegosaurus, spinosaurus, velociraptor, archaeopteryx, dilophosaurus, brachiosaurus);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 10);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
