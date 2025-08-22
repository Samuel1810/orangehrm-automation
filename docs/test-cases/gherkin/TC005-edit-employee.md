Feature: Edit employee details

Scenario: Successfully update the employee's first name
    Given I am logged into the system
    And an employee named "Samuel Costa" already exists
    When I go to the "Employee List" screen in the PIM module
    And I search for "Samuel Costa" and open their profile
    And I click the "Edit" button on the Personal Details screen
    And I change the First Name to "QA_1234"
    And I click the "Save" button
    Then I should see a success toast message with "Successfully Updated"
    And the First Name field should display "QA_1234"
