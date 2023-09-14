import inquirer from  "inquirer";

let {num1,num2,operation} = await inquirer.prompt([{
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
    choice: ["add","sub","mul","div"],
    message: "Enter your opreation:",
},
]);

//console.log("Insha Allah, in" + (60 - answer.age) + "you will be 60 years old." );

if (operation === "addition"){
    console.log(`The sum of two numbers = ${num1 + num2}`);
}
else if (operation === "subtraction") {
    console.log(`The difference of two numbers = ${num1 - num2}`);
}