const calcFunc = require('../functions/calcFunc');

const operatorTestsBegin = () => console.log('Operators Tests Begin');
const operatorTestsEnds = () => console.log('Operators Tests Ended');
const operatorTestCheckStarts = () => console.log('Opertor Check Started...');
const operatorTestCheckEnds = () => console.log('Opertor Check Completed...');

beforeAll(() => operatorTestsBegin());
afterAll(() => operatorTestsEnds());
afterEach(() => operatorTestCheckEnds());
beforeEach(() => operatorTestCheckStarts());

describe('Checking calc operator', () => {
  test('properly adds two numbers', () => {
    expect(calcFunc('+', '1', '2')).toBe(3);
  });

  test('properly subtract two numbers', () => {
    expect(calcFunc('-', '3', '1')).toBe(2);
  });

  test('properly multiply two numbers', () => {
    expect(calcFunc('x', '2', '3')).toBe(6);
  });

  test('properly divide two numbers', () => {
    expect(calcFunc('÷', '9', '3')).toBe(3);
  });
});
