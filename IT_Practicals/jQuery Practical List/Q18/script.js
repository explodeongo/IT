function countNumbers() {
    // Get the input value and split it into an array of numbers
    var inputNumbers = document.getElementById('numbers').value.split(',').map(Number);

    // Initialize counters
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;

    // Loop through the array and count positive, negative, and zero numbers
    for (var i = 0; i < inputNumbers.length; i++) {
        if (inputNumbers[i] > 0) {
            positiveCount++;
        } else if (inputNumbers[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Display the results
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Positive Numbers: ${positiveCount}</p>
        <p>Negative Numbers: ${negativeCount}</p>
        <p>Zeros: ${zeroCount}</p>
    `;
}