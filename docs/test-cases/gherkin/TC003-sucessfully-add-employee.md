Feature: Add new employee

Scenario: Successfully create an employee with a unique empId
    Given I am logged into the system
    And I am on the "Add Employee" page in the PIM module
    When I enter "Samuel<TIMESTAMP>" as the first name
    And I enter "Costa" as the last name
    And I overwrite the Employee Id with "QA<TIMESTAMP>"
    And I overwrite the Employee ID with "QA<TIMESTAMP>"
    And I click the Save button
    Then I should see a success toast with "Successfully Saved"
    And the "Personal Details" header should be visible on the screen
