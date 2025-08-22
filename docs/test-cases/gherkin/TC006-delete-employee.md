Feature: Delete employee

Scenario: Successfully delete an employee and confirm they no longer appear in the list
    Given I am logged into the system
    And an employee named "Samuel Costa" already exists
    When I go to the "Employee List" screen
    And I search for "Samuel Costa" and click the Delete icon on their row
    And I confirm the deletion by clicking "Yes, Delete" in the modal
    And I search again for "Samuel Costa"
    Then I should see a toast message with "Successfully Deleted"
    And the banner "No Records Found" should be displayed
    And the employee should no longer appear in the table
