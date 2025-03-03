# Snack-Overflow
## Table of Contents
1. Project Description
2. Demo 1: Sign-up/login Page
3. Demo 2: Admin & Employee Features
## Project Description
Snack Overflow is a website/system that helps office admins track snack inventory. Employees can request snacks, upvote their favorite items, and view what’s currently in stock. Admins receive notifications when inventory is running low.

## Demo 1: Sign-up/login page
We pre-registered a test account with the following credentials: <br/>
Name: admin <br/>
Email: test@gmail.com <br/>
Password: pswd <br/>

### Functionalities
On the Register page, you can create an account by entering your name, email, and password. The password is securely hashed and stored in a local MySQL database. After successful registration, a confirmation message appears, and you can navigate to the Login page to access your account using your credentials. <br/>

Once logged in, you will be redirected to a personalized welcome page displaying your username, along with an option to log out. If you forget your password, you can click the "Forgot My Password" button, which takes you to a page where you can enter your email to receive a password reset link. <br/>

![image](https://github.com/user-attachments/assets/7eb47adc-2850-42f9-b800-465c9fa6666e)

![image](https://github.com/user-attachments/assets/97df2bbc-8d9f-4678-b9a8-2b4d5f049c31)

![image](https://github.com/user-attachments/assets/ed78e111-3820-4a77-a728-369ec0da9fc1) 

![image](https://github.com/user-attachments/assets/a473916b-a954-435f-815d-f149a4c648d6) <br/>

### Backend
Structure: <br/>
snack_inventory_backend/ <br/>
node_modules/          # Installed npm packages <br/>
routes/                # Contains route handlers <br/>
routes/auth.js         # Handles user authentication (login, register, reset password) <br/>
.env                   # Stores environment variables (database, email, secret keys) <br/>
db.js                  # MySQL database connection <br/>
server.js              # Main entry file to start Express server <br/>
package.json           # Project metadata and dependencies <br/>
package-lock.json      # Dependency versions <br/>

Notes: <br/>
- Node.js runs the Express.js web server (server.js) <br/>
- It listens for incoming requests from the frontend and sends responses <br/>
- When a user logs in, the frontend sends a request to http://localhost:5000/api/auth/login, and Node.js processes it <br/>


## Demo 2: Admin & Employee Features

### Switching from HTML/CSS/JavaScript to React Framework
We initially built our project using simple HTML, CSS, and JavaScript, but based on our TA's recommendation, we transitioned to a React framework for better scalability and maintainability. To make this switch in VS Code, we first set up a React project using "npx create-react-app", then reorganized our code into reusable components. We migrated our existing styles and logic, integrated React's state management where needed, and updated our workflow to adapt to React’s modular approach. We reuploaded the updated code files and structure to this repository. <br/>

### Front-end sketching of pages
Then, we desgined and made some sketches of how we want our front-end of the admin and employee pages should look like.  <br/>

We wanted to have the following features in the employee page : 
1. Home page # This is where the employee can view the various snack options that are provided.
2. Order History page # In this page employees can see the order status of any current orders and the previous orders they have placed. 
3. Profile Page # This page shows the details of the employee i.e. Name, Email, snacks requests left per day etc. 
4. A shopping cart page # This page shows the snacks that are added to cart where they can request the snacks. 

This is how we wanted our home page of the Employee Page to look like : 
<img width="836" alt="Screenshot 2025-03-01 at 5 16 08 PM" src="https://github.com/user-attachments/assets/1af77c7f-c780-4bb1-87d6-7a0ab436f93c" /> <br/>

This is how we wanted our Order History page of the Employee Page to look like : 
<img width="748" alt="Screenshot 2025-03-01 at 5 38 42 PM" src="https://github.com/user-attachments/assets/db690760-3e42-428e-9e0b-3c52cf897372" /> <br/> 

This is how we wanted our Profile page of the Employee Page to look like : 
<img width="866" alt="Screenshot 2025-03-01 at 6 00 18 PM" src="https://github.com/user-attachments/assets/30676b35-81f9-4154-b889-6ec502204aaf" /> <br/>

This is how we wanted our shopping cart page of the Employee Page to look like : 
<img width="857" alt="Screenshot 2025-03-01 at 6 29 34 PM" src="https://github.com/user-attachments/assets/ff137c63-d4be-4d8f-81d2-cee79b0756d5" /> <br/>

We wanted to have the following features in the admin page : 
1. Home Page
2. Tracking employee order history page
3. Statistics of snacks page
4. Snack Inventory Page
5. Profile page

This is how the home page of the employee page will look like : 
<img width="774" alt="Screenshot 2025-03-02 at 3 48 22 PM" src="https://github.com/user-attachments/assets/b6d06781-6f0b-4242-b18c-da5b9592dba8" /> <br/>

This is how the tracking employee History Page will look like : 
<img width="864" alt="Screenshot 2025-03-02 at 4 07 29 PM" src="https://github.com/user-attachments/assets/4463c6c1-91b8-4e2c-af2f-5950969c51fd" /> <br/>

This is how the statistics of the snacks page will look like : 
<img width="862" alt="Screenshot 2025-03-02 at 4 24 10 PM" src="https://github.com/user-attachments/assets/0095fd30-3ca1-4a49-98ad-24fd37e30b3e" /> <br/>

This is how the snack inventory will look like : 
<img width="864" alt="Screenshot 2025-03-02 at 4 39 49 PM" src="https://github.com/user-attachments/assets/3b70a044-03e8-48f2-85df-8871d54f8c2d" /> <br/>

This is how the profile page is going to look like : 
<img width="816" alt="Screenshot 2025-03-02 at 4 45 00 PM" src="https://github.com/user-attachments/assets/4616ce08-7588-47de-b335-114bd4363223" /> <br/>

### Feature 1: Functional Employee Dashboard (order + view order history)

Overview: 
The Employee Dashboard serves as the primary interface for employees to browse available snacks, place orders, and track their order history. This ensures a smooth and intuitive experience for employees when interacting with the snack inventory system.
### Functionalities
✅ 1. Employee Welcome Page
![image](https://github.com/user-attachments/assets/85d2aba7-e2f1-437c-b85e-8fbe26c2e8f4)
* Displays a personalized welcome message (Welcome Back, t2).
* Shows available snack options in a grid format.
* Each snack card contains:
    * Snack name.
    * "+ Order" button to add the item to the request queue.
  * Navigation Sidebar allows easy access to:
    * Home – Main dashboard.
    * Order History – Track past orders.
    * Profile – Employee details (not shown in the image).
    * Logout – Securely exit the system
   
✅ 2. Order History Page
![image](https://github.com/user-attachments/assets/43227baf-dad8-4db1-b2e0-f8761fe9b17c)

* Displays all orders placed by the logged-in employee (Order History for t2).
* Table format containing:
    * Order Number – Unique identifier for tracking.
    * Snack Item – Name of the snack ordered.
    * Snack ID – Identifier for the snack in inventory.
    * Date Ordered – When the order was placed.
    * Order Status – Indicates approval (Approved), rejection (Denied), or processing (Pending).
* The page provides real-time tracking of an employee’s snack requests.

### Feature 2: Functional Admin Dashboard (viewing, approving, and declining orders)
Overview: 
The Admin Panel provides administrators with full control over snack requests. It allows them to view, approve, and decline orders, ensuring proper management of inventory and employee requests.
![image](https://github.com/user-attachments/assets/a24e0824-4c16-45f4-8223-42749117336d)

### Functionalities
✅ 1. Admin Dashboard
* Displays a personalized admin greeting (Welcome, t4).
* Provides an overview of all orders in a structured table.
* Navigation Sidebar includes:
    * Dashboard – Main admin control panel.
    * Logout – Securely exit the system.

✅ 2. Order Management (Approve/Deny Orders)
* Table format displaying all snack requests from employees.
* Columns include:
    * Order Number – Unique identifier for tracking requests.
    * User ID – Employee who placed the order.
    * Snack – Name of the snack requested.
    * Date Ordered – When the order was placed.
    * Status – Order state (Pending, Approved, Denied).
    * Actions – Approve or Deny buttons.
      
* Approval Workflow:
    * Clicking Approve updates the status to "Approved", allowing the request to be fulfilled.
    * Clicking Decline updates the status to "Denied", rejecting the request.
  
## Summary of the Functionalities 
The Employee Dashboard allows employees to browse available snacks, place orders, and track their order history. Employees can request snacks directly from the system and monitor the status of their requests, which may be Approved, Denied, or Pending. However, they do not have administrative control over orders. 
On the other hand, the Admin Dashboard is designed for managing snack requests, where admins have the authority to approve or decline orders. While employees can only track their own orders, admins oversee all requests and update their statuses in real time. Employees do not have access to order management, ensuring that only admins can control the approval process.

## Software Requirements
This project was developed on VS Code. <br/> 
For the login page, make sure to install the "REST Client" to test API requests inside VS Code. You should also have extensions to support HTML, CSS, and JavaScript in VS Code. <br/>
Download: Node.js, HTML/CSS/JavaScript, MySQL.

## Authors & Copyright
© 2025 Salma Bhar, Lalithya Reddy Gangula, Lakshmi Kunjan, and Dhoopshikha Basgeet. All rights reserved.
This project was developed as part of CSDS 393: Software Engineering at Case Western Reserve University during the Spring 2025 semester.

