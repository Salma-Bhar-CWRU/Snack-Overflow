/**
 * Unit tests for reporting features.
 * Tests display of top snacks and statistics dashboard.
 */

const { getTopSnacks, getStats } = require('../routes/stats');

test('display top 3 snacks', () => {
  const result = getTopSnacks();
  expect(result.length).toBeLessThanOrEqual(3);
});

test('generate snack order statistics', () => {
  const result = getStats();
  expect(result).toHaveProperty('chart');
  expect(result).toHaveProperty('table');
});
