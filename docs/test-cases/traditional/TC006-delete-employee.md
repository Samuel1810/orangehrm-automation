Test Type: Functional / Positive

Test ID / Title: TC006 Delete an employee and confirm removal from the list

Module: PIM / Employee List

Description:
    Ensure that the user can log in, create a new employee, and then delete the record from the Employee List.

Objective: 
    Ensure that an existing employee can be deleted and is no longer shown in the list after the operation.

Preconditions:
    - User is logged into the system.
    - An employee record exists (create one using the steps from TC003 if needed).

Steps:
    - Log in to the system.
    - Navigate to PIM > Employee List.
    - Search for the employee by name (e.g., "Samuel Costa").
    - In the results table, locate the row of the employee.
    - Click the Delete icon (trash can) in that row.
    - In the confirmation modal, click “Yes, Delete”.
    - Search again for the same employee name to confirm deletion.

Expected Results:
    - A toast message should appear with “Successfully Deleted”.
    - The message “No Records Found” should be displayed.
    - The results table should not display the deleted employee.