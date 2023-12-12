function getMonthNameFromDate(dateString) {
    // Create a new Date object from the provided date string
    var date = new Date(dateString);

    // Array of month names
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];

    // Get the month index (0-11) from the Date object
    var monthIndex = date.getMonth();

    // Return the corresponding month name
    return monthNames[monthIndex];
}

function showMonth() {
    var dateInput = document.getElementById('dateInput').value;
    var resultElement = document.getElementById('result');

    // Check if the input is in the correct format
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
        var monthName = getMonthNameFromDate(dateInput);
        resultElement.textContent = "Month Name: " + monthName;
    } else {
        resultElement.textContent = "Invalid date format. Please use YYYY-MM-DD.";
    }
}

