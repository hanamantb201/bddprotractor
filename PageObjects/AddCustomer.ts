import {ElementFinder, element,by} from "protractor"

export class Addcustomer
            {  
            
            addCustomerLink:ElementFinder;
            firstName:ElementFinder;
            lastName:ElementFinder;
            postCode:ElementFinder;
            btnAddCustomer:ElementFinder;
            constructor()
            
            {
       
            this.addCustomerLink=element(by.buttonText('Add Customer'));      
            this.firstName= element(by.model('fName'));
   	   		this.lastName= element(by.model('lName'));
        	this.postCode=element(by.model('postCd'));
        	this.btnAddCustomer=element(by.xpath('//button[@type="submit"]'));
            }

        }