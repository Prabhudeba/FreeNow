#Author: Prabhudeba Parida
# Free Now Project-Automation assignment
Feature: GET: Automated Demo Tests
  Description: GET: purpose of this feature is to test some demo app.

  @get
  Scenario Outline: Validate the response code for the users endpoint
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then I try to verify the status code is "<StatusCode>"

    Examples:
      | URL    | ContentType      | RequestBody | RequestMethod | StatusCode |
      | /users | application/json |             | GET           |        200 |

  @get
  Scenario Outline:Validate the searched user name is present on user list
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then verify the "<searchUserName>" is present on the userlist output
    Examples:
      | URL    | ContentType      | searchUserName | RequestMethod | StatusCode | RequestBody |
      | /users | application/json | Samantha       | GET           |        200 |      |
  @get
  Scenario Outline:Verify post details written by the user.
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then Retrive post details written by the "<userName>"
    Examples:
      | URL    | ContentType      | userName | RequestMethod | StatusCode |
      | /posts   |application/json | Samantha | GET           |        200 |


  @get
  Scenario Outline: Verify the comments for each post.
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then Retrive comments for the each posts "<username>"
    Examples:
      | URL    | ContentType      | username | RequestMethod | StatusCode |
      | /comments | application/json | Samantha | GET           |        200 |

  @get
  Scenario Outline: Verify the emails in the comments sections are in the proper format
    Given I want to set resource URL as "<URL>" to the baseURI
    When I set header content type as "<ContentType>"
    When I hit the API with requestbody "<RequestBody>" and request method is "<RequestMethod>"
    Then Retrive comments for the each posts "<username>"
    Then verify the emails in the comments section for user "<username>" is in proper format
    Examples:
      | URL       | ContentType      | username | RequestMethod | StatusCode |
      | /comments | application/json | Samantha | GET           |        200 |