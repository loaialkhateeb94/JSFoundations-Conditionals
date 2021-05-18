const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

let num1 = prompt("please enter the first number")
num1 = parseInt(num1);
if(isNaN(num1))
    console.log("the number is invalid")

let num2 = prompt("please enter the second number")
num2 = parseInt(num2);
if(isNaN(num2)) 
    console.log("the number is invalid")


let ope = prompt("Please choose the operation (+, -, /, *)")
if(ope === "+"){
    console.log(num1+num2)
}
if(ope === "-"){
    console.log(num1-num2)
}
if(ope === "/"){
    console.log(num1/num2)
}
if(ope === "*"){
    console.log(num1*num2)
}

if (ope !== "+" && ope !== "-" && ope !== "/" && ope !== "*") {
console.log("operation not valid")
}
