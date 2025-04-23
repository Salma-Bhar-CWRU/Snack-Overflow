# Project Name : SnackOverflow 

## Project Description

Snack Overflow is a web-based inventory management system for office environments. It allows employees to request snacks, upvote their favorite items, and check their snack order history. Admins can approve or deny the employee snack requests, can check their order history and restock snack inventory. The platform ensures streamlined snack tracking, better stock management, and fair access for all employees. 
**Target Users: Office administrators and employees.

## Architecture 

Context Diagram

- This diagram illustrates the high-level interaction between Admins, Employees, and the Snack Ordering System

  <img width="685" alt="Screenshot 2025-04-23 at 7 15 03 PM" src="https://github.com/user-attachments/assets/91c85ce7-5fdc-46fd-a22a-9b01547da3af" />

  </br> 


Class Diagram (Object-Oriented Design) 

- Represents the full object-oriented design of the system, showing classes, attributes, and methods

<img width="557" alt="Screenshot 2025-04-23 at 7 15 58 PM" src="https://github.com/user-attachments/assets/7adae5a3-f78b-496a-a107-5a9828741e73" />

 </br> 

Entity-Relationship Diagram (Database Schema) 

- Outlines database tables and relationships

<img width="567" alt="Screenshot 2025-04-23 at 7 16 22 PM" src="https://github.com/user-attachments/assets/08f6f6bc-cd06-435f-b646-82bbb4f1f2ab" />

</br> 

Data Model Diagram (Snack Order Flow) 

- Illustrates how employees, admins, and snack inventory interact through the order process

<img width="595" alt="Screenshot 2025-04-23 at 7 16 44 PM" src="https://github.com/user-attachments/assets/64e93672-6c5d-4087-a924-1f73064a21ef" />

 </br> 

## Getting started

- Prerequisites
    1. Node.js & npm installed
    2. MySQL server running locally
    3. VS Code with REST Client extension (for API testing)

- Setup Steps (In the terminal) 

    1. Clone the repository
    https://github.com/your-team/snack-overflow.git

    2. Start the frontend (React app)
    cd snack-overflow-frontend
    npm install
    npm run start

    3. Start the backend (Node.js server)
    cd ../snack_inventory_backend
    npm install
    npm run start

- Notes
  - Step 2 runs the web app frontend (React.js).
  - Step 3 starts the backend server that connects to the MySQL database.
  
## Usage/Examples

- For Non-Technical Users
    1. Register / Log In → Open the app in your browser and click “Register” to create an account or “Login” if you already have one.
    2. Employee Features → After logging in, you will see a welcome page. Browse snacks on the dashboard and click “+ Order” to request snacks. Click “Order History” in the             sidebar to check order statuses. Go to “Profile” to see your daily limit and favorite snacks.
    3. Admin Features → Admins have a custom sidebar and access to:
          - All snack orders from employees (with Approve/Deny options)
          - Inventory management (add/edit stock)
          - Snack popularity statistics (charts + tables)
          - Admin profile with quick access to management tools

Test Login Credentials

    1. Admin
      - Email: t4@gmail.com
      - Password: t4

    2. User
      - Email: t5@gmail.com
      - Password: t5

## Folder Structure overview 

/components # sidebar layout components for admins and employees
/components/EmployeeSidebarLayout.js # layout for employee sidebar
/components/SidebarLayout.js # base sidebar layout component
/components/test # placeholder for future test components

/pages # all frontend pages for users and admins
/pages/AdminDashboard.js # admin dashboard view
/pages/AdminProfile.js # admin profile page
/pages/EmployeeProfile.js # employee profile page
/pages/ForgotPassword.js # email recovery view
/pages/InventoryPage.js # admin snack inventory management
/pages/Login.js # user login page
/pages/OrderHistory.js # view employee snack order history
/pages/Register.js # user registration page
/pages/ResetPassword.js # password reset page
/pages/StatsPage.js # admin statistics visualization
/pages/UserDashboard.js # employee snack dashboard

/App.js # main React component with route structure
/App.test.js # unit test for App component
/setupTests.js # test config setup for React Testing Library
/reportWebVitals.js # optional performance reporting
/index.js # React entry point
/index.css # base styles
/App.css # component styles
/logo.png # application logo asset

/routes # all backend Express route files
/routes/auth.js # login, register, password reset routes
/routes/inventory.js # manage snack inventory
/routes/orders.js # submit and view orders
/routes/snacks.js # snack listing API
/routes/stats.js # generate snack statistics

/db.js # connects backend to MySQL database
/server.js # starts Node.js Express server
/.env # environment variables (DB credentials, keys)
/package.json # backend project dependencies
/package-lock.json # locked versions of backend packages
/README.md # backend readme (optional or inherited)
/databasedebugging.txt # SQL test/debug notes
/mysqlcommands.txt # reusable SQL setup commands

