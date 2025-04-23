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
  const user = "user@example.com";
  requestSnack(user, "Chips");
  requestSnack(user, "Cookies");
  requestSnack(user, "Granola Bar");
  const result = requestSnack(user, "Trail Mix");
  expect(result.error).toBe("Daily snack limit exceeded");
});

test('snack out of stock', () => {
  const result = requestSnack("test@gmail.com", "Twix");
  expect(result.error).toBe("Snack out of stock");
});
