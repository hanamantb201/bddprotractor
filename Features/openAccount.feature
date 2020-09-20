Feature: Test application

Background: Launch URL
  Given launch the url  "http://www.way2automation.com/angularjs-protractor/banking/#/login"

Scenario: Open Account
   When I click on Bank Manager Login
   And click on open account 
   And select customerName and currency
   Then open account success message Displayed
   
