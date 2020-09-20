"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browseName: 'chrome'
    },
    specs: [
        '../Features/openAccount.feature'
    ],
    cucumberOpts: {
        format: 'json:./cucumberreports.json',
        OnComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './cucumberreports.json',
                output: './cucumber_report.html',
                reportSuiteAsScenarios: true,
                scenarioTimeStamp: true,
                launchReport: true,
                metadata: {
                    "App version": "0.3.2",
                    "Test Enviornment": "Ftest",
                    "Browser": "Chrome 54.0.2480.98",
                    "Platform": "Windows 10",
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        },
        require: ['Features/StepDefinitions/StepDef.js']
    },
    plugins: [{
            package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Protractor Certification",
                pageFooter: "<div><p>BddFramework</p></div>",
                customData: {
                    title: 'Protractor Bdd Framework',
                    data: [
                        { label: 'Project', value: 'Protractor Test' },
                        { label: 'Created By', value: 'Hanamant Balundagi' }
                    ]
                }
            },
        }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQWtEO0FBRXZDLFFBQUEsTUFBTSxHQUFVO0lBQ3BCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRTlELFlBQVksRUFBQztRQUNQLFVBQVUsRUFBQyxRQUFRO0tBQ2Y7SUFFSCxLQUFLLEVBQUM7UUFDTixpQ0FBaUM7S0FDOUI7SUFFRyxZQUFZLEVBQUM7UUFDWixNQUFNLEVBQUMsNkJBQTZCO1FBRXBDLFVBQVUsRUFBRSxHQUFHLEVBQUU7WUFFZixJQUFJLE9BQU8sR0FBSTtnQkFDZixLQUFLLEVBQUMsV0FBVztnQkFDakIsUUFBUSxFQUFDLHdCQUF3QjtnQkFDakMsTUFBTSxFQUFDLHdCQUF3QjtnQkFDL0Isc0JBQXNCLEVBQUMsSUFBSTtnQkFDM0IsaUJBQWlCLEVBQUMsSUFBSTtnQkFDdEIsWUFBWSxFQUFDLElBQUk7Z0JBQ2pCLFFBQVEsRUFBQztvQkFDSCxhQUFhLEVBQUMsT0FBTztvQkFDckIsa0JBQWtCLEVBQUMsT0FBTztvQkFDMUIsU0FBUyxFQUFDLHFCQUFxQjtvQkFDL0IsVUFBVSxFQUFDLFlBQVk7b0JBQ3RCLFVBQVUsRUFBQyxXQUFXO29CQUNyQixVQUFVLEVBQUMsUUFBUTtpQkFDakM7YUFFVyxDQUFDO1lBRWYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyxDQUFDO1FBRUwsT0FBTyxFQUFDLENBQUMscUNBQXFDLENBQUM7S0FDL0M7SUFHRCxPQUFPLEVBQUMsQ0FBQztZQUVMLE9BQU8sRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG1EQUFtRCxDQUFDO1lBQzlFLE9BQU8sRUFBRztnQkFDVCwyQkFBMkIsRUFBQyxJQUFJO2dCQUM5Qiw0QkFBNEIsRUFBQyxJQUFJO2dCQUM3QixtQkFBbUIsRUFBQyxJQUFJO2dCQUN4QixTQUFTLEVBQUMsMEJBQTBCO2dCQUNwQyxVQUFVLEVBQUMsZ0NBQWdDO2dCQUMzQyxVQUFVLEVBQUM7b0JBQ2QsS0FBSyxFQUFDLDBCQUEwQjtvQkFDaEMsSUFBSSxFQUFFO3dCQUNBLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUk7d0JBQzVDLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsb0JBQW9CLEVBQUM7cUJBQzVDO2lCQUVBO2FBQ0o7U0FFSCxDQUFDO0NBRVgsQ0FBQyJ9