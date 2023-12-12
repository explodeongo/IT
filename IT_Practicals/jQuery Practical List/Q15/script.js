function addRows() {
    // Sample data (array of objects)
    var data = [
        { name: 'John', age: 25, country: 'USA' },
        { name: 'Alice', age: 30, country: 'Canada' },
        { name: 'Bob', age: 22, country: 'UK' }
    ];

    var tableBody = document.getElementById('tableBody');

    // Loop through the data array
    for (var i = 0; i < data.length; i++) {
        var rowData = data[i];

        // Create a new row
        var newRow = tableBody.insertRow(tableBody.rows.length);

        // Insert cells in the new row
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        // Set the content of cells with data
        cell1.textContent = rowData.name;
        cell2.textContent = rowData.age;
        cell3.textContent = rowData.country;
    }
}