Test Type: Functional / Positive

Test ID / Title: TC003 - Successfully create a new employee with a unique empId

Module: PIM / Add Employee

Description: 
    Ensure that a new employee can be created successfully through the Add Employee form in the PIM module.

Objective: 
    Ensure that a new employee can be created with a unique employee ID of up to 10 characters.

Preconditions:
    - User is authenticated.
    - User has access to the "Add Employee" screen.
    - Enter a valid and unique employee ID.

Steps:
    - Log in and access the PIM > Add Employee screen.
    - In the form, enter a unique First Name (e.g., “Samuel12345”).
    - Enter “Costa” as the Last Name.
    - Replace the default Employee ID with a unique value up to 10 characters (e.g., “QA12345678”).
    - Click the Save button.

Expected Results:
    - A "Successfully Saved" toast message should appear.
    - The system redirects to a new page showing the Personal Details of the created employee.

