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

![image](https://github.com/user-attachments/assets/ed78e111-3820-4a77-a728-369ec0da9fc1) <br/>

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

We initially built our project using simple HTML, CSS, and JavaScript, but based on our TA's recommendation, we transitioned to a React framework for better scalability and maintainability. To make this switch in VS Code, we first set up a React project using "npx create-react-app", then reorganized our code into reusable components. We migrated our existing styles and logic, integrated React's state management where needed, and updated our workflow to adapt to React’s modular approach. We reuploaded the updated code files and structure to this repository. <br/>

Then, we desgined and made some sketches of how we want our front-end of the admin and employee pages should look like.  <br/>

We wanted to have the following features in the overall employee page : 
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

## Software Requirements
This project was developed on VS Code. <br/> 
For the login page, make sure to install the "REST Client" to test API requests inside VS Code. You should also have extensions to support HTML, CSS, and JavaScript in VS Code. <br/>
Download: Node.js, HTML/CSS/JavaScript, MySQL.

## Authors & Copyright
© 2025 Salma Bhar, Lalithya Reddy Gangula, Lakshmi Kunjan, and Dhoopshikha Basgeet. All rights reserved.
This project was developed as part of CSDS 393: Software Engineering at Case Western Reserve University during the Spring 2025 semester.

