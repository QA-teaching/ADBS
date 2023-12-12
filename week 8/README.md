# Week 8 - User Authentication in MongoDB  & Node.js

## Prerequisites
Before proceeding with the setup, ensure that you have the following prerequisites in place:

1) **Node.js Installation:**

* Make sure you have Node.js installed on your machine.
* To download and install the latest version of Node.js, visit Node.js official website.

2) **MongoDB Setup:** 

* Please refer to week 7 presentation slides for setting up your cluster in MongoDB Atlas.

These prerequisites are essential for a seamless setup and execution of the project.

## Install Node.js Packages
Open a terminal or command prompt in the project directory.

Run the following command to install the required Node.js packages:

`npm install`


## Run application

After the packages are successfully installed, run the application with the following command:

Debug mode: `npm run dev`

Run: `npm start`

**Access the Application:**

Open your web browser and navigate to the specified URL or port where the application is running. The default is often `http://localhost:8080`

### User role endpoint

GET HTTP request

`curl --location 'http://localhost:8080/api/test/moderator' \
--header 'x-access-token: token'`

### SignUp endpoint

POST HTTP request

`curl --location 'http://localhost:8080/api/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "test",
    "email": "test@example.com",
    "password": "abc123",
    "roles": [
        "moderator"
    ]
}'`

### SignIp endpoint

POST HTTP request

`curl --location 'localhost:8080/api/auth/signin' \
--header 'Content-Type: application/json' \
--data '{
    "username": "test",
    "email": "test@example.com"
}'`



To stop the application, you can use Ctrl + C in the terminal where the application is running.