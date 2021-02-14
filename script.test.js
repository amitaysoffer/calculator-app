// import { expect } from '@jest/globals';
// import { errorMessage } from './script';
// const errorMessage = require('./script');

// const add = require('./script');

// test('Error message', () => {
//   expect(add.add(2, 2)).toBe(4);
// });

// console.log(errorMessage);

// errorMessage('amitay');

const { expect } = require('@jest/globals');
// const sum = require('./script');
import sum from './script';

test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
