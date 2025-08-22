Test Type: Functional / Positive

Test ID: TC004

Title: Search for a newly created employee by name

Module: PIM / Employee List

Description:
    Ensure that the user can log in, create a new employee with a unique ID, and then search for them in the Employee List by name using the autocomplete field.

Objective: 
    Ensure that a just created employee can be found by typing their name in the Employee List search using the autocomplete field, ensuring the ID matches what you just created.

Preconditions:
    - User is logged into the system.
    - An employee has already been created (e.g., from TC003).

Steps:
    - Log in to the system.
    - Go to PIM > Employee List.
    - In the "Employee Name" field (labeled with “Type for Hints”), start typing the name of the newly created employee.
    - Wait for the autocomplete dropdown to appear.
    - Select the correct full name from the dropdown.
    - Click the Search button.

Expected Results:
    - A message like “Record(s) Found” should be visible.
    - The message “No Records Found” should not be shown.
    - A results table should be displayed.
    - The employee with the correct name and ID should appear in the table.