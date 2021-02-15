const createErrorMessage = require('../functions/createErrorMessage');

test('display error', () => {
  expect(createErrorMessage).toBeDefined();
});

test('Properly add error message', () => {
  const message = createErrorMessage('+');
  expect(message).toBe(`You must enter a number before you enter '+'`);
});
