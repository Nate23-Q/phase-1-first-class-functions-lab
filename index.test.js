const assert = require('assert');
const {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
} = require('./index');

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// Test returnFirstTwoDrivers
assert.deepStrictEqual(returnFirstTwoDrivers(drivers), ['Antonia', 'Nuru'], 'returnFirstTwoDrivers should return the first two drivers');

// Test returnLastTwoDrivers
assert.deepStrictEqual(returnLastTwoDrivers(drivers), ['Amari', 'Mo'], 'returnLastTwoDrivers should return the last two drivers');

// Test selectingDrivers
assert.strictEqual(typeof selectingDrivers[0], 'function', 'First element of selectingDrivers should be a function');
assert.strictEqual(typeof selectingDrivers[1], 'function', 'Second element of selectingDrivers should be a function');
assert.deepStrictEqual(selectingDrivers[0](drivers), ['Antonia', 'Nuru'], 'selectingDrivers[0] should return the first two drivers');
assert.deepStrictEqual(selectingDrivers[1](drivers), ['Amari', 'Mo'], 'selectingDrivers[1] should return the last two drivers');

// Test createFareMultiplier
const quadruple = createFareMultiplier(4);
assert.strictEqual(quadruple(5), 20, 'createFareMultiplier(4) should quadruple the fare');

// Test fareDoubler
assert.strictEqual(fareDoubler(10), 20, 'fareDoubler should double the fare');

// Test fareTripler
assert.strictEqual(fareTripler(10), 30, 'fareTripler should triple the fare');

// Test selectDifferentDrivers
assert.deepStrictEqual(selectDifferentDrivers(drivers, returnFirstTwoDrivers), ['Antonia', 'Nuru'], 'selectDifferentDrivers with returnFirstTwoDrivers should return the first two drivers');
assert.deepStrictEqual(selectDifferentDrivers(drivers, returnLastTwoDrivers), ['Amari', 'Mo'], 'selectDifferentDrivers with returnLastTwoDrivers should return the last two drivers');

console.log()