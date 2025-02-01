# Express.js Duplicate Email Registration Bug

This repository demonstrates a common bug in Express.js applications: the failure to properly handle duplicate email registrations during user creation. The bug is that when there's already an existing user with the same email in the database, the application fails to check it properly and prevents adding another user with the same email. 

## Bug Description
The provided Express.js code snippet allows users to register with the POST request. However, it doesn't effectively prevent the creation of accounts with duplicate email addresses. The application should check for the existence of an email in its database and return a proper error message indicating a duplicate email if found.

## Solution
The solution involves implementing a proper check for duplicate emails before adding a new user.  This check should be integrated into the user creation logic. The application should send back an appropriate HTTP status code (400 Bad Request) and a JSON response indicating the error.

## How to reproduce
1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `npm install` to install Express.js
4. Run `node bug.js` to start the server.
5. Send POST requests to `/users` with duplicate email addresses. You will observe that the server allows duplicate entries.

## How to fix
1. Refer to the bugSolution.js file in this repository.
2. Use the given solution to fix the bug. 
3. Run `node bugSolution.js` to test the corrected code.  The server will now correctly handle duplicate email registrations.
