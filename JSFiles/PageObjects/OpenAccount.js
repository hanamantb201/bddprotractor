"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Openaccount {
    constructor() {
        this.openAccountLink = protractor_1.element(protractor_1.by.buttonText('Open Account'));
        this.customerDropdown = protractor_1.element(protractor_1.by.cssContainingText('option', "Harry Potter"));
        this.btnProcess = protractor_1.element(protractor_1.by.buttonText('Process'));
        this.currencyDropdown = protractor_1.element(protractor_1.by.cssContainingText('option', "Dollar"));
        ;
    }
}
exports.Openaccount = Openaccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkFjY291bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9PcGVuQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUF1RTtBQUV2RSxNQUFhLFdBQVc7SUFVWjtRQUlBLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUl6RSxDQUFDO0NBS0o7QUExQlQsa0NBMEJTIn0=