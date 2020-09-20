import {Given, When,Then, Before, After, Status} from "cucumber"
import {browser, element,by} from "protractor"
import chai from "chai"
import {Home} from "../../PageObjects/HomePage"
import {Addcustomer} from "../../PageObjects/AddCustomer"
import {Openaccount} from "../../PageObjects/OpenAccount"
import {testdata} from "../../TestData/testData"

var expect=chai.expect;

let objHome=new Home();
let objAddCustomer=new Addcustomer();
let objOpenAccount=new Openaccount();
let objTestData=new testdata();


Given('launch the url  {string}',{timeout: 60*1000},async function (url) {	 
	 console.log("browser launched")
	await browser.driver.manage().window().maximize();
	await browser.get(url).then(async function(){
	
	await browser.sleep(3000) 
	 
	 });
 });
 
 When('I click on Bank Manager Login',{timeout: 60*1000}, async function (){
 
  console.log("click on Bank manager Login");
  await objHome.btnBankManagerLogin.click();
  
  
 });
 
 When('click on Add customer',{timeout: 60*1000}, async function (){
 
  console.log("click on Add customer");
 await objAddCustomer.addCustomerLink.click();
  
 });
 
 
 When('I give customer Details {string},{string},{string}',{timeout: 60*1000}, async function (fName,lName,pCode){
 
       console.log("Enter Customer Details");
  	   await objAddCustomer.firstName.sendKeys(fName);
   	   await objAddCustomer.lastName.sendKeys(lName);
       await objAddCustomer.postCode.sendKeys(pCode);
       
 
 });
 
 
  When('click on open account',{timeout: 60*1000}, async function (){
 
       console.log("Click on Open account");
  	   await objOpenAccount.openAccountLink.click();
   	 
       
 
 });
 
 Then ('customer added successfully after clicking confirmation Pop Up',{timeout: 60*1000},async function (){
   
   try{ console.log("Customer add succesfully");
 
      await objAddCustomer.btnAddCustomer.click();      
      await browser.switchTo().alert().getText().then(async function (text){
      expect(text).to.include(objTestData.succesMsgforaddCustomer);
        
       await browser.switchTo().alert().accept();
       }); 
       
       
       }
       catch(error){
    	    console.log("error message"+ error)
       		
       }
       
       
 })
 
 
 When ('select customerName and currency',{timeout: 60*1000},async function (){
   
   try{ console.log("Select Customer and currency");
 
     				await objOpenAccount.customerDropdown.click();
     				await objOpenAccount.currencyDropdown.click();
   
       }
       catch(error){
    	    console.log("error message"+ error)
       		
       }
       
       
 })
 
  Then ('open account success message Displayed',{timeout: 60*1000},async function (){
   
   try{ console.log(" Opened account succesfully");
 
     await objOpenAccount.btnProcess.click();
      await browser.switchTo().alert().getText().then(async function (text){
      expect(text).to.include(objTestData.successMsgforOpenAccount);
        
       await browser.switchTo().alert().accept();
       }); 
       
       
       }
       catch(error){
    	    console.log("error message"+ error)
       		expect(true).to.equal(false);
       }
       
       
 })
 
 Before(async function(){
 
 await browser.manage().deleteAllCookies();
 
 })
 
 After(async function(scenario){
 
 				if (scenario.result.status === Status.FAILED)
 					{
 					 const screenshot=await browser.takeScreenshot();
  				     this.attach(screenshot, "image/png")
 
 				     }
 
 })