import {Config,Capabilities} from "protractor";
import * as reporter from "cucumber-html-reporter"
 
export let config:Config = {
   			 directConnect:true,
   			 framework:'custom',
    		 frameworkPath:require.resolve('protractor-cucumber-framework'),
    
    		 Capabilities:{
    			      browseName:'chrome'  
                }, 	
    
              specs:[
              '../Features/openAccount.feature'
                ],
   
                    cucumberOpts:{
                     format:'json:./cucumberreports.json',
      
                     OnComplete: () =>  {
     
                       var options =  {
                       theme:'bootstrap',
                       jsonFile:'./cucumberreports.json',
                       output:'./cucumber_report.html',
                       reportSuiteAsScenarios:true,
                       scenarioTimeStamp:true,
                       launchReport:true,
                       metadata:{
                             "App version":"0.3.2",
                             "Test Enviornment":"Ftest",
                             "Browser":"Chrome 54.0.2480.98",
                             "Platform":"Windows 10",
                              "Parallel":"Scenarios",
                               "Executed":"Remote"
   						       }
     
                           };

   					      reporter.generate(options); 
     
  						},
   
    require:['Features/StepDefinitions/StepDef.js']
   },
   
   
   plugins:[{
   
       package:require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
     options:  {
    		automaticallyGenerateReport:true,
  		    removeExistingJsonReportFile:true,
            openReportInBrowser:true,
            pageTitle:"Protractor Certification",
            pageFooter:"<div><p>BddFramework</p></div>",
            customData:{
    	    title:'Protractor Bdd Framework',
   		    data: [
   		          {label:'Project',value:'Protractor Test'   },
   		          {label:'Created By',value:'Hanamant Balundagi'}
   	          	  ]
     
    	            }
   	         },
   
          }]  	
          
};