// Regular function declaration
function regularFunction(message) {
    console.log('Regular Function:', message);
}

// Function expression
var functionExpression = function (message) {
    console.log('Function Expression:', message);
};

// Immediately Invoked Function Expression (IIFE)
(function (message) {
    console.log('IIFE:', message);
})('Hello from IIFE');

// Calling the regular function
regularFunction('Hello from Regular Function');

// Calling the function expression
functionExpression('Hello from Function Expression');