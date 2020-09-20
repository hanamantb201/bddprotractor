import {ElementFinder, element,by} from "protractor"

export class Home
            {  
            
            btnCustomerLogin:ElementFinder;
            btnBankManagerLogin:ElementFinder;
            
            constructor()
            
            {
            
            this.btnBankManagerLogin=element(by.buttonText('Bank Manager Login'));
            this.btnCustomerLogin=element(by.buttonText('Customer Login'));
            }

        }