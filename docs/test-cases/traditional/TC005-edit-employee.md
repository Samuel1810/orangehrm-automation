Test Type: Functional / Positive

Test ID / Title: TC005 - Edit an employee’s first name successfully

Module: PIM / Personal Details

Description:
    Ensure the user can log in, create a new employee, and successfully update the First Name field in their personal details.

Objective: 
    Ensure that an existing employee's first name can be edited and saved successfully.

Preconditions:
    - User is logged into the system.
    - A valid employee record exists (create using the steps from TC003 if needed).

Steps:
    - Log in to the system.
    - Navigate to PIM > Employee List.
    - Search for the newly created employee (e.g., “Samuel Costa”) and click Search.
    - Click on the employee's row to open the profile.
    - Update the First Name field with a new value (e.g., “QA_1234”).
    - Click Save.

Expected Results:
    - A success toast message should appear with the text “Successfully Updated”.
    - The First Name field should show the newly entered value, confirming that the update was saved.
    - The URL may include "/pim/viewPersonalDetails".