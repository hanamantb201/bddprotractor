
import {ElementFinder,ElementArrayFinder, element,by} from "protractor"

export class Openaccount
            {  
            
             openAccountLink:ElementFinder;
             customerDropdown:ElementFinder;
             currencyDropdown:ElementFinder;
             btnProcess:ElementFinder;
           
          
            
            constructor()
            
            {
            
            this.openAccountLink=element(by.buttonText('Open Account'));
            this.customerDropdown=element(by.cssContainingText('option',"Harry Potter"));
            this.btnProcess=element(by.buttonText('Process'));
             this.currencyDropdown=element(by.cssContainingText('option',"Dollar"));;
            
            
            
            }
            
          
            

        }