/**
 * Unit tests for order history views.
 * Tests both employee and admin access to history.
 */

const { getUserHistory, getAdminHistory } = require('../routes/orders');

test('fetch employee order history', () => {
  const result = getUserHistory("test@gmail.com");
  expect(Array.isArray(result)).toBe(true);
});

test('fetch admin order overview', () => {
  const result = getAdminHistory();
  expect(result).toHaveProperty('summary');
});
