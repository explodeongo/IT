// Creating an array
var fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Displaying the original array
console.log('Original Array:', fruits);

// Adding an element to the end of the array
fruits.push('Grapes');
console.log('After push:', fruits);

// Removing the last element from the array
var lastElement = fruits.pop();
console.log('After pop:', fruits);
console.log('Removed Element:', lastElement);

// Adding an element to the beginning of the array
fruits.unshift('Pineapple');
console.log('After unshift:', fruits);

// Removing the first element from the array
var firstElement = fruits.shift();
console.log('After shift:', fruits);
console.log('Removed Element:', firstElement);

// Finding the index of an element
var index = fruits.indexOf('Banana');
console.log('Index of Banana:', index);

// Removing an element by index
fruits.splice(index, 1);
console.log('After splice:', fruits);

// Reversing the array
fruits.reverse();
console.log('After reverse:', fruits);

// Sorting the array
fruits.sort();
console.log('After sort:', fruits);

// Creating a new array with selected elements
var citrusFruits = fruits.slice(1, 3);
console.log('Citrus Fruits:', citrusFruits);