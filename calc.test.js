// const sum = require('./script');

// console.log(sum);
// test('properly adds two numbers', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const calcFunc = require('./calc');

test('properly adds two numbers', () => {
  expect(calcFunc('+', '1', '2')).toBe(3);
});
