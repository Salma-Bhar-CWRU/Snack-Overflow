/**
 * Unit tests for daily snack limit logic.
 * Tests resetting limits and checking remaining requests.
 */

const { resetDailyLimit, getRemainingRequests } = require('../routes/snacks');

test('daily request reset', () => {
  const result = resetDailyLimit("user@example.com");
  expect(result).toBe(true);
});

test('check remaining requests', () => {
  const result = getRemainingRequests("user@example.com");
  expect(result).toBeLessThanOrEqual(3);
});
