"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var _a = await inquirer_1.default.prompt([{
        name: "num1",
        type: "number",
        message: "Enter your First number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your Second number:"
    },
    {
        name: "operation",
        type: "list",
        choice: ["add", "sub", "mul", "div"],
        message: "Enter your opreation:",
    },
]), num1 = _a.num1, num2 = _a.num2, operation = _a.operation;
//console.log("Insha Allah, in" + (60 - answer.age) + "you will be 60 years old." );
if (operation === "addition") {
    console.log("The sum of two numbers = ".concat(num1 + num2));
}
else if (operation === "subtraction") {
    console.log("The difference of two numbers = ".concat(num1 - num2));
}
