Feature: Login to the OrangeHRM system

Scenario: User logs in with valid credentials
    Given I am on the login page
    And I have valid credentials stored in environment variables
    And I click the login button
    Then I should be redirected to a URL that contains "/dashboard"
    And the "PIM" menu should be visible on the screen
