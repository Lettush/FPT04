// Data Types - Reference (Array)
// Array - allows us to store multiple values in a single variable

// Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Peach'];

console.log(fruits);

// Accessing array elements
console.log('First fruit:', fruits[0]);
console.log('Second fruit:', fruits[1]);
console.log('Sixth fruit:', fruits[6]); // Undefined

// length - to get the number of values in the array
console.log(fruits.length);
console.log('Last fruit:', fruits[fruits.length - 1]);

// Modifying array
fruits[3] = 'Kiwi';
console.log(fruits);

// Add elements using .push
fruits.push('Guava');
console.log(fruits);

fruits.push('Blueberry', 'Fig', 'Strawberry')
console.log(fruits);

// Removing the last element using .pop
console.log(fruits.pop());
console.log(fruits);

// Remove a specific element
fruits.splice(4, 1);
console.log(fruits); // removed 'Peach'

/* Loop through arrays */
// Array iteration with for loop
let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Array iteration with forEach method
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number ** 2);
})

// .indexOf() gets the index number of a target value
console.log('Index of 4:', numbers.indexOf(4)); // 3
console.log(numbers[3]);

// .includes() checks if the value exists in the array
console.log('Does it have 7?', numbers.includes(7));
