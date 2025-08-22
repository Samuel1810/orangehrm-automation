Test Type: Functional / Smoke

Test ID / Title: TC001 - Login with valid credentials

Module: Authentication

Description: 
    The user should be able to log in successfully by providing valid credentials on the login page.

Objective: 
    - Ensure that a user with valid credentials can successfully access the Dashboard.

Preconditions:
    - Environment variables username and password are properly configured.
    - The browser is open at the base URL: https://opensource-demo.orangehrmlive.com.

Steps:
    - Navigate to the login page at /web/index.php/auth/login.";
    - Enter valid username credential;
    - Enter valid password credential;
    - Click the Login button;
    - Wait for the system to redirect to the authenticated area.

Expected Results:
    - The URL should include /dashboard.
    - The sidebar menu should display the “PIM” option and it must be visible.
    - No error message should be shown.
