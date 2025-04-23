/**
 * Unit tests for inventory management.
 * Includes stock updates and retrieving inventory list.
 */

const { updateStock, getInventory } = require('../routes/inventory');

test('update snack stock', () => {
  const result = updateStock("Oreo Mini", 15);
  expect(result.updated).toBe(true);
});

test('retrieve inventory list', () => {
  const result = getInventory();
  expect(Array.isArray(result)).toBe(true);
});
