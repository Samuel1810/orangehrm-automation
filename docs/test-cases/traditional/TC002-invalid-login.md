Test Type: Functional / Negative

Test ID / Title: TC002 - Login with invalid credentials

Module: Authentication

Description: 
    User should enter the base URL, and enter with non valid credentials in the username and password fields. The system should display an 'Invalid credentials' error message and remain on the login page.

Objective: 
    Ensure that the system shows an error and remains on the login page when invalid credentials are used.

Preconditions:
    - User has access to the login page at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login.

Test Data:
    Username: invalidUser
    Password: invalidPass

Steps:
    - Navigate to the base URL that should end with /web/index.php/auth/login.
    - Enter an invalid username.
    - Enter an invalid password.
    - Click the Login button.

Expected Results:
    - A toast or alert with the message “Invalid credentials” should be displayed.
    - The user should remain on the /auth/login page.
    - The username and password fields should remain visible and enabled.
