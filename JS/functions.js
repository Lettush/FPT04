// Functions allow us to write reusable blocks of code that can be executed whenever needed.

// Defining a function
function greet() {
    console.log("Hello, welcome to the world of functions!");
    console.log("Wahoo!");
}

// Calling a function
greet();

// Defining Functions with parameter
// num1 and num2 are parameters
function sum(num1, num2) {
    console.log("Calculating the value...");
    return num1 + num2;
    console.log("Calculation done!");
}

// Calling functions with parameter
// 5, 8 are arguments
console.log(sum(5, 8));

let result = sum(8, 12);
console.log(result);