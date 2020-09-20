Feature: Test application

Background: Launch URL
  Given launch the url  "http://www.way2automation.com/angularjs-protractor/banking/#/login"

Scenario Outline: Login test
   When I click on Bank Manager Login
   And click on Add customer
   And I give customer Details "<FirstName>","<LastName>","<PostCode>"
   Then customer added successfully after clicking confirmation Pop Up
   
   
 Examples:
 		| FirstName | LastName |PostCode|
 		| Hanamant  | Balundagi| 560105 |
 		| Trishan   | Balundagi| 560105 |
 		