
# Snack Overflow : Unit Testing Documentation

This document outlines the unit testing strategy and test implementation details for the **Snack Overflow** inventory management system. </br>

It complements the manual testing documented in our functional test cases assignment we submitted earlier and provides automated validation of all core project features using **Jest**, a JavaScript testing framework. </br>

## Testing Framework

- **Language**: JavaScript (Node.js)

- **Test Types**:
  - Unit Testing
  - Edge Case Testing
  - Regression Testing


## Expected Inputs and Outputs

This section outlines the expected behavior of the functions tested using Jest. Each entry includes example input values and the corresponding expected output, reflecting both typical usage and edge cases. These expectations align with our functional requirements and ensure the system performs reliably.

### Test Case 1: register Employee
- Expected Input: `"test", "test@gmail.com", "pswd", “user"`
- Expected Output: `{ success: true }`   </br>
  Indicates the user was successfully registered and stored in the database.

### Test Case 2: register Admin
- Expected Input: `"test", "test_admin@gmail.com", "pswdadmin", "admin"`
- Expected Output: `{ success: true }`   </br>
  Indicates the user was successfully registered and stored in the database.


### Test Case 3: login User
- Expected Input (valid): `"test@gmail.com", "pswd"`
- Expected Output: `{ success: true, token: "<jwt>" }`   </br>
  Confirms successful login and returns an authentication token.

- Expected Input (invalid): `"test@gmail.com", "wrongpswd"`
- Expected Output: `{ success: false }`   </br>
  Indicates the credentials are incorrect.

### Test Case 4: reset Password
- Expected Input: `"test@gmail.com"`
- Expected Output: `{ message: "Password reset link sent to email" }`  </br>
Sends a password reset link to the user's email.

### Test Case 5: request Snack in stock
- Expected Input: `"test@gmail.com", "Oreo Mini"`
- Expected Output: `{ status: "pending" }`  </br>
  Confirms that the snack request was submitted and is awaiting admin approval.

### Test Case 6: request Snack outside daily limits
- Expected Input (limit exceeded): more than three requests in one day
- Expected Output: `{ error: "Daily snack limit exceeded" }`  </br>
  Enforces the daily limit of 3 snack requests per user.

### Test Case 7: request Snack out of stock
- Expected Input (out of stock): `"test@gmail.com", "Twix"`
- Expected Output: `{ error: "Snack out of stock" }`  </br>
  Prevents the user from requesting unavailable items.

### Test Case 8: approve Request
- Expected Input: `"request123"`
- Expected Output: `{ status: "approved" }`  </br>
  Marks the request as approved and deducts inventory.

### Test Case 9: deny Request
- Expected Input: `"request124"
- Expected Output: `{ status: "denied"}`  

### Test Case 10: update Stock
- Expected Input: `"Oreo Mini", 15`
- Expected Output: `{ updated: true }`   </br>
  Confirms that the stock for the specified snack has been increased.

### Test Case 11: Check Inventory
- Expected Input: None (check inventory page as an admin)
- Expected Output: Array of snack objects with names and quantities  </br>
  Represents the current inventory of all snacks.

### Test Case 12: Top Snacks
- Expected Input: None (check top snacks on employee profile page)
- Expected Output: Array of up to 3 most popular snacks in the dashboard </br>
  Lists the most popular snacks for the employee

### Test Case 13: Order History
- Expected Input: None (check history for an employee)
- Expected Output: Array of the user's past snack requests  </br>
  Includes request status and timestamps for each order.

### Test Case 14: Check Statistics
- Expected Input: None (check statistics page as an admin)
- Expected Output: chart and table showcasing number of snacks ordered of each kind </br>
  Shows pie chart with proportions of snacks ordered and table with quantities of snacks ordered.

### Test Case 15: Admin History
- Expected Input: None (check past snacks requests as an admin)
- Expected Output: Object containing request summaries   </br>
  Provides an admin view of total request volume and activity.

### Test Case 16: reset Daily Limits
- Expected Input: None (wait for the next day)
- Expected Output: snack limit is reset to 3 daily </br>
  Resets the user’s daily snack request count.

### Test Case 17: Remaining Requests
- Expected Input: None (check profile page as an employee)
- Expected Output: A number between 0 and 3   </br>
  Reflects how many snack requests the user can still make today.


## How to Run Tests

### Step 1: Install Dependencies
```bash
npm install
```

## TestFiles and their coverages 
Test File | Description </br>
auth.test.js | Tests user registration, login, and password reset </br>
requests.test.js | Tests snack requests and daily limit validation </br>
admin.test.js | Tests admin approval and denial workflows </br>
inventory.test.js | Tests stock updates and low-stock alert triggering </br>
notifications.test.js | Tests real-time user notifications </br>
reports.test.js | Tests report generation and top snack display </br>
limits.test.js | Tests 24-hour daily snack limit reset logic </br>
history.test.js | Tests employee and admin request history view </br>


## Sample Test Snippet 
```bash
test('should deny snack request after limit reached', () => {
  const user = "user@example.com";
  requestSnack(user, "Chips");
  requestSnack(user, "Cookies");
  requestSnack(user, "Granola Bar");
  const response = requestSnack(user, "Trail Mix");
  expect(response.error).toBe("Daily snack limit exceeded");
});
```

# Contributors
Developed and tested by: </br>
- Lalithya Gangula
- Salma Bhar
- Dhoopshikha Basgeet
- Lakshmi Kunjan


