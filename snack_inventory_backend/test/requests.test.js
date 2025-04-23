/**
 * Unit tests for snack request logic.
 * Tests stock availability and daily limit constraints.
 */

const { requestSnack } = require('../routes/snacks');

test('request in-stock snack', () => {
  const result = requestSnack("test@gmail.com", "Oreo Mini");
  expect(result.status).toBe("pending");
});

test('deny snack request after daily limit', () => {
  const user = "test@gmail.com";
  requestSnack(user, "Oreo Mini");
  requestSnack(user, "Oreo Mini");
  requestSnack(user, "Oreo Mini");
  const result = requestSnack(user, "Oreo Mini");
  expect(result.error).toBe("Daily snack limit exceeded");
});

test('snack out of stock', () => {
  const result = requestSnack("test@gmail.com", "Twix");
  expect(result.error).toBe("Snack out of stock");
});
