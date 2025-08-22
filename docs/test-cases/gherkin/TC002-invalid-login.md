Feature: Invalid login attempt

Scenario: User attempts to log in with invalid credentials
    Given I am on the login page
    When I enter "invalidUser" as username and "invalidPass" as password
    And I click the Login button
    Then I should see an error message containing "Invalid credentials"
    And I should remain on the "/auth/login" page
    And the username and password fields should still be visible
