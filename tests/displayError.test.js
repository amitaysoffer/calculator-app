const createErrorMessage = require('../functions/createErrorMessage');

test('display error', () => {
  expect(createErrorMessage).toBeDefined();
});

test('Properly add error message', () => {
  expect(createErrorMessage('+')).toBe(
    `You must enter a number before you enter '+'`
  );
});
