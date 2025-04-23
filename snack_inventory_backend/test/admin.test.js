/**
 * Unit tests for admin actions.
 * Includes approving and denying snack requests.
 */

const { approveRequest, denyRequest } = require('../routes/orders');

test('approve snack request', () => {
  const result = approveRequest("request123");
  expect(result.status).toBe("approved");
});

test('deny snack request', () => {
  const result = denyRequest("request124");
  expect(result.status).toBe("denied");
});
