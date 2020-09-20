"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../../PageObjects/HomePage");
const AddCustomer_1 = require("../../PageObjects/AddCustomer");
const OpenAccount_1 = require("../../PageObjects/OpenAccount");
const testData_1 = require("../../TestData/testData");
var expect = chai_1.default.expect;
let objHome = new HomePage_1.Home();
let objAddCustomer = new AddCustomer_1.Addcustomer();
let objOpenAccount = new OpenAccount_1.Openaccount();
let objTestData = new testData_1.testdata();
cucumber_1.Given('launch the url  {string}', { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("browser launched");
        yield protractor_1.browser.driver.manage().window().maximize();
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.sleep(3000);
            });
        });
    });
});
cucumber_1.When('I click on Bank Manager Login', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("click on Bank manager Login");
        yield objHome.btnBankManagerLogin.click();
    });
});
cucumber_1.When('click on Add customer', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("click on Add customer");
        yield objAddCustomer.addCustomerLink.click();
    });
});
cucumber_1.When('I give customer Details {string},{string},{string}', { timeout: 60 * 1000 }, function (fName, lName, pCode) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Enter Customer Details");
        yield objAddCustomer.firstName.sendKeys(fName);
        yield objAddCustomer.lastName.sendKeys(lName);
        yield objAddCustomer.postCode.sendKeys(pCode);
    });
});
cucumber_1.When('click on open account', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Click on Open account");
        yield objOpenAccount.openAccountLink.click();
    });
});
cucumber_1.Then('customer added successfully after clicking confirmation Pop Up', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Customer add succesfully");
            yield objAddCustomer.btnAddCustomer.click();
            yield protractor_1.browser.switchTo().alert().getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    expect(text).to.include(objTestData.succesMsgforaddCustomer);
                    yield protractor_1.browser.switchTo().alert().accept();
                });
            });
        }
        catch (error) {
            console.log("error message" + error);
        }
    });
});
cucumber_1.When('select customerName and currency', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Select Customer and currency");
            yield objOpenAccount.customerDropdown.click();
            yield objOpenAccount.currencyDropdown.click();
        }
        catch (error) {
            console.log("error message" + error);
        }
    });
});
cucumber_1.Then('open account success message Displayed', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(" Opened account succesfully");
            yield objOpenAccount.btnProcess.click();
            yield protractor_1.browser.switchTo().alert().getText().then(function (text) {
                return __awaiter(this, void 0, void 0, function* () {
                    expect(text).to.include(objTestData.successMsgforOpenAccount);
                    yield protractor_1.browser.switchTo().alert().accept();
                });
            });
        }
        catch (error) {
            console.log("error message" + error);
            expect(true).to.equal(false);
        }
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBEZWZpbml0aW9ucy9TdGVwRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBZ0U7QUFDaEUsMkNBQThDO0FBQzlDLGdEQUF1QjtBQUN2Qix5REFBK0M7QUFDL0MsK0RBQXlEO0FBQ3pELCtEQUF5RDtBQUN6RCxzREFBZ0Q7QUFFaEQsSUFBSSxNQUFNLEdBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV2QixJQUFJLE9BQU8sR0FBQyxJQUFJLGVBQUksRUFBRSxDQUFDO0FBQ3ZCLElBQUksY0FBYyxHQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ3JDLElBQUksY0FBYyxHQUFDLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ3JDLElBQUksV0FBVyxHQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBRy9CLGdCQUFLLENBQUMsMEJBQTBCLEVBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFDLFVBQWdCLEdBQUc7O1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUNoQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOztnQkFFNUIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4QixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBQyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFDLEVBQUU7O1FBRXhELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMzQyxNQUFNLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUczQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVCQUF1QixFQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRTs7UUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLG9EQUFvRCxFQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRSxVQUFnQixLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUs7O1FBRXpHLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN2QyxNQUFNLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdwRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0YsZUFBSSxDQUFDLHVCQUF1QixFQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBRTs7UUFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUlsRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFFLGdFQUFnRSxFQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUMsRUFBQzs7UUFFeEYsSUFBRztZQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUUxQyxNQUFNLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUMsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixJQUFJOztvQkFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7b0JBRTVELE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUMsQ0FBQzthQUFBLENBQUMsQ0FBQztTQUdGO1FBQ0QsT0FBTSxLQUFLLEVBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRSxLQUFLLENBQUMsQ0FBQTtTQUVwQztJQUdQLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUUsa0NBQWtDLEVBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFDOztRQUUxRCxJQUFHO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBRTNDLE1BQU0sY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlDLE1BQU0sY0FBYyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBRS9DO1FBQ0QsT0FBTSxLQUFLLEVBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRSxLQUFLLENBQUMsQ0FBQTtTQUVwQztJQUdQLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFFRCxlQUFJLENBQUUsd0NBQXdDLEVBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFDLElBQUksRUFBQyxFQUFDOztRQUVqRSxJQUFHO1lBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBRTlDLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztvQkFFN0QsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMxQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1NBR0Y7UUFDRCxPQUFNLEtBQUssRUFBQztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO0lBR1AsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGlCQUFNLENBQUM7O1FBRVAsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFFMUMsQ0FBQztDQUFBLENBQUMsQ0FBQTtBQUVGLGdCQUFLLENBQUMsVUFBZSxRQUFROztRQUV6QixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUMzQztZQUNDLE1BQU0sVUFBVSxHQUFDLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQTtTQUVwQztJQUVWLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==