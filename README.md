# Snack-Overflow
## Table of Contents
1. Project Description
2. Demo 1: Sign-up/login Page
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


Further development of the system will continue, with additional features being implemented by the Demo 2 deadline. We will change to React for front end and implement the admin/employee features. <br/>

## Software Requirements
This project was developed on VS Code. <br/> 
For the login page, make sure to install the "REST Client" to test API requests inside VS Code. You should also have extensions to support HTML, CSS, and JavaScript in VS Code. <br/>
Download: Node.js, HTML/CSS/JavaScript, MySQL.

## Authors & Copyright
© 2025 Salma Bhar, Lalithya Reddy Gangula, Lakshmi Kunjan, and Dhoopshikha Basgeet. All rights reserved.
This project was developed as part of CSDS 393: Software Engineering at Case Western Reserve University during the Spring 2025 semester.

