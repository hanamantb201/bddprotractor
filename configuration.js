"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browseName: 'chrome'
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        require: 'Features/StepDefinitions/StepDef.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFVyxRQUFBLE1BQU0sR0FBUTtJQUNyQixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUMsUUFBUTtJQUVsQixhQUFhLEVBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUU5RCxZQUFZLEVBQUM7UUFDYixVQUFVLEVBQUMsUUFBUTtLQUNsQjtJQUVGLEtBQUssRUFBQyxDQUFDLDJCQUEyQixDQUFDO0lBRW5DLFlBQVksRUFBQztRQUNYLE9BQU8sRUFBQyxxQ0FBcUM7S0FDOUM7Q0FHSCxDQUFBIn0=