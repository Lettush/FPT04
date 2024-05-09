// JS Operators and Expressions

// 1. Arithmetic Operators
let x = 21;
let y = 10;

// Addition '+'
let sum = x + y;
console.log("Sum:", sum);

// Subtraction '-'
let difference = x - y;
console.log("Difference:", difference);

// Multiplication '*'
let product = x * y;
console.log("Product:", product);

// Division '/'
let quotient = x / y;
console.log("Quotient:", quotient);

// Exponent '**'
let exponent = x ** 2;
console.log("Exponent:", exponent);

// Modulo '%'
let remainder = x % y; // 21 / 10 = 2 (remainder 1)
console.log("Remainder:", remainder);

// PEMDAS / BODMAS
let answer = ((10 / 2) * 23) / 2;
console.log(answer);

// 2. String Expressions/Concatenation
console.log("1" + "1");
console.log("Hello" + " " + "world!");

let greeting = "Hi";
let myName = "Jared";
let combinedString = greeting + ", " + myName + "."
console.log(combinedString);

// 3. Comparison Operators
// Equal to (==): This operator checks if two values are equal. LOOSE EQUALITY
console.log("5 == 5:", 5 == 5);
console.log("5 == '5'", 5 == '5'); // only checks for the value, type is not really a concern
console.log("'hello' == 'world':", "hello" == "world");

// Not equal to (!=): This operator checks if two values are not equal. LOOSE
console.log("5 != 5:", 5 != 5);
console.log("5 != '5'", 5 !='5'); // only checks for the value, type is not really a concern
console.log("'hello' != 'world':", "hello" != "world");

// Strict equal to (===): This operator checks if two values are equal in both value and type.
console.log("5 === 5:", 5 === 5);
console.log("5 === '5'", 5 === '5'); // check for both value and type
console.log("'hello' === 'world':", "hello" === "world");

// Strict not equal to (!==): This operator checks if two values are equal in both value and type.
console.log("5 !== 5:", 5 !== 5);
console.log("5 !== '5'", 5 !== '5'); // check for both value and type
console.log("'hello' !== 'world':", "hello" !== "world");

// Greater Than
console.log("5 > 3:", 5 > 3);
console.log("3 > 5:", 3 > 5);

// Less Than
console.log("5 < 3:", 5 < 3);
console.log("3 < 5:", 3 < 5);

// Greater Than or Equal To
console.log("5 >= 5:", 5 >= 5);
console.log("5 >= 3:", 5 >= 3);
console.log("3 >= 5:", 3 >= 5);

// Less Than or Equal To
console.log("5 <= 5:", 5 <= 5);
console.log("5 <= 3:", 5 <= 3);
console.log("3 <= 5:", 3 <= 5);

// 4. Logical operators (&&, ||, !)
let sunny = false;
let warm = true;

// AND (&&)
console.log("Is it sunny AND warm?", sunny && warm);
console.log(5 <= 5 && 3 < 5);

// OR (||)
console.log("Is it sunny OR warm?", sunny || warm);
console.log(5 <= 5 || 3 > 5);

// NOT (!)
console.log("NOT sunny?", !sunny);

// 5. Assignment operators (+=, -=, *=, etc.)
let a = 10;
let b = 5;

a += b;
console.log("The new value of a is:", a); // 15

a -= b;
console.log("The new value of a is:", a); // 10

a *= b;
console.log("The new value of a is:", a); // 50

a /= b;
console.log("The new value of a is:", a); // 10

a **= b;
console.log("The new value of a is:", a); // 100000

a %= b;
console.log("The new value of a is:", a); // 0
