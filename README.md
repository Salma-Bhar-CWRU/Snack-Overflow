<div align="center">

# Project Name : SnackOverflow  

![image](https://github.com/user-attachments/assets/6124f04a-3ca5-4c09-94b5-996c95e83ff0)

</div>

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
    2. MySQL server running locally. We included in the source code "/mysqlcommands.txt" for the SQL setup commands and "/databasedebugging.txt" for SQL test/debug notes. You will need to create the database yourself or contact the authors to get authentitification information to the database.
    3. VS Code with REST Client extension (for API testing)

- Setup Steps (In the terminal) 

    1. Clone the repository </br>
    https://github.com/Salma-Bhar-CWRU/Snack-Overflow.git

    2. Start the frontend (React app) </br>
    cd snack-overflow-frontend </br>
    npm install </br>
    npm run start

    3. Start the backend (Node.js server) </br>
    cd ../snack_inventory_backend </br>
    npm install </br>
    npm run start </br>
</br>
- Notes  </br>
  - Step 2 runs the web app frontend (React.js).
  - Step 3 starts the backend server that connects to the MySQL database.
  
## Usage/Examples

- For Non-Technical Users
    1. Register / Log In → Open the app in your browser and click “Register” to create an account or “Login” if you already have one.
    2. Employee Features → After logging in, you will see a welcome page. Browse snacks on the dashboard and click “+ Order” to request snacks. Click “Order History” in the sidebar to check order statuses. Go to “Profile” to see your daily limit and favorite snacks.
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

/public # public assets for the frontend </br>
/public/index.html # base HTML file </br>
/public/logo192.png, logo512.png # app icons </br>
/public/manifest.json # PWA settings </br>
/public/robots.txt # SEO configuration </br>

/src # frontend source code </br>
/src/components # reusable layout components </br>
/src/components/EmployeeSidebarLayout.js # employee-specific sidebar </br>
/src/components/SidebarLayout.js # generic layout for dashboard </br>
/src/pages # all React pages </br>
/src/pages/AdminDashboard.js # admin dashboard </br>
/src/pages/AdminProfile.js # admin profile page </br>
/src/pages/EmployeeProfile.js # employee profile </br>
/src/pages/ForgotPassword.js # password recovery </br>
/src/pages/InventoryPage.js # inventory management </br>
/src/pages/Login.js # login screen </br>
/src/pages/OrderHistory.js # employee order history </br>
/src/pages/Register.js # registration form </br>
/src/pages/ResetPassword.js # password reset </br>
/src/pages/StatsPage.js # admin stats/charts </br>
/src/pages/UserDashboard.js # employee dashboard </br>
/src/pages/Welcome.js # welcome landing screen </br>

/App.js # main React app logic </br>
/App.css # React app styles </br>
/index.js # app entry point </br>
/index.css # base CSS </br>
/logo.png # logo used in header </br>
/reportWebVitals.js # performance reporting </br>
/setupTests.js # Jest setup for unit testing </br>
/App.test.js # frontend unit test for App </br>

/snack_inventory_backend # backend root folder </br>
/routes # API route handlers </br>
/routes/auth.js # login, register, password reset APIs </br>
/routes/inventory.js # snack inventory APIs </br>
/routes/orders.js # order submission and retrieval APIs </br>
/routes/snacks.js # snack listing routes </br>
/routes/stats.js # analytics/statistics endpoints </br>

/test # backend unit tests </br>
/test/admin.test.js # admin functionality tests </br>
/test/auth.test.js # login/register tests </br>
/test/history.test.js # order history tests </br>
/test/inventory.test.js # inventory management tests </br>
/test/limits.test.js # snack limit logic tests </br>
/test/reports.test.js # stats/report generation tests </br>
/test/requests.test.js # snack request flow tests </br>

/db.js # MySQL database connection file </br>
/server.js # backend entry point (Express server) </br>
/.env # environment variables </br>
/jsdoc.json # JSDoc config for documentation generation  </br>
/package.json # backend dependencies and metadata  </br>
/package-lock.json # locked dependency versions </br>
/databasedebugging.txt # backend SQL debug/test notes </br>
/mysqlcommands.txt # initial schema setup and commands </br>
/testing.md # explains test files, coverage, and commands </br>


## Tech Stack and dependencies 

- Frontend: 
  1. HTML, CSS – Styling and layout 
  2. JavaScript – Logic and interactivity 
  3. React.js – Component-based frontend framework 
  4. VS Code – Development environment 

- Backend: 
  1. Node.js – Server-side runtime environment 
  2. Express.js – Web framework for handling routes and APIs 
  3. REST API – Communication layer between frontend and backend 

- Database: 
  1. MySQL – Relational database for storing user info, snack inventory, and order history 

## Contributions 

Salma Bhar: Database management and backend logic for snack limits and inventory updates. Built employee order history and collaborated on admin/employee profile designs. 
 </br> 

Dhoopshikha Basgeet: Built admin profile and inventory frontend, plus statistics page UI. Developed approve/deny logic and helped with employee dashboard frontend. 
 </br> 

Lakshmi Kunjan: Created backend for admin profile, inventory, and statistics page. Worked on employee dashboard frontend and profile page sketches. 
 </br> 

Lalithya Gangula: Developed employee profile (front + back) and built admin dashboard features. Helped implement inventory backend and approve/deny request functionality.
 </br> 


## Development Retrospective
- Challenges & Mistakes:
  1. Most of the team was new to React, so we initially built the project using HTML/CSS/JavaScript. This made migration more difficult and time-consuming.
  2. Learning core React concepts like state, props, and hooks took effort, as we relied on documentation and tutorials.
  3. Linking user roles to specific dashboards (admin vs employee) required careful backend logic and protected frontend routing.
  4. Syncing snack requests and approvals required designing a unified inventory table and coordinating backend status updates.
  5. We underestimated the value of consistent design early on and had to standardize styles late in development.
   </br> 
   
- Lessons Learned / Suggestions:
  1. Decide and commit to the core tech stack from the start (especially when using a framework like React).
  2. Design key database schemas early and plan data flow between roles.
  3. Protect routes and handle roles early in development to avoid logic gaps later.
  4. Define global CSS and design patterns in advance to maintain consistency.
  5. Invest more time upfront in learning technologies together as a team.

## License
License information will be added here soon. This is just a placeholder until we get an appropriate open-source license. </br>
This project was developed as part of a semester-long assignment for CSDS 393 Software Engineering course at Case Western Reserve University.
