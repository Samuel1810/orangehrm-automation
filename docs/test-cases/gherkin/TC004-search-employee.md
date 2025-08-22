Feature: Search for employee

Scenario: Search for a just created employee by full name using autocomplete
    Given I am logged into the system
    And an employee named "Samuel Costa" already exists
    When I go to the "Employee List" screen in the PIM module
    And I type "Samuel Costa" in the "Employee Name" search field
    And I select the suggested option from the autocomplete dropdown
    And I click the "Search" button
    Then I should see a banner with "Record(s) Found"
    And I should not see "No Records Found"
    And the employee "Samuel Costa" with the correct ID should appear in the results table
