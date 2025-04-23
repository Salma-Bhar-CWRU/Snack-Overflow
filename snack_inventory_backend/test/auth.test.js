/**
 * Unit tests for authentication routes.
 * Includes registration, login, and password reset features.
 */

const { registerUser, loginUser, resetPassword } = require('../routes/auth');

test('register new employee', () => {
  const result = registerUser("test", "test@gmail.com", "pswd", "user");
  expect(result).toEqual({ success: true });
});

test('login with correct credentials', () => {
  const result = loginUser("test@gmail.com", "pswd");
  expect(result.success).toBe(true);
});

test('login with incorrect credentials', () => {
  const result = loginUser("test@gmail.com", "wrongpswd");
  expect(result.success).toBe(false);
});

test('reset password sends email', () => {
  const result = resetPassword("test@gmail.com");
  expect(result.message).toMatch(/Password reset link/);
});
