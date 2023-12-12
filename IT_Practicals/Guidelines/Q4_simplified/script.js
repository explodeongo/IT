const colors = [
    "#FECACA",
    "#FDE68A",
    "#A7F3D0",
    "#BFDBFE",
    "#C7D2FE",
    "#DDD6FE",
    "#FBCFE8",
    "#BAEEE1",
    "#FED7AA"
];

let currentTable = 2;

function createTableRow(number, values, backgroundColor) {
    const row = document.createElement("tr");
    const numberCell = document.createElement("td");
    const valuesCell = document.createElement("td");

    numberCell.textContent = number;
    numberCell.style.fontWeight = "bold";
    numberCell.style.backgroundColor = backgroundColor;
    numberCell.style.fontSize = `${10 + (currentTable - 2) * 2}px`;


    valuesCell.innerHTML = values.map(value => `<div class="col" style="border: 0.5px solid black">${value}</div>`).join("");
    valuesCell.classList.add("row"); // Add Bootstrap row class
    valuesCell.style.marginLeft = "0";
    valuesCell.style.marginRight = "0";
    valuesCell.style.backgroundColor = backgroundColor;
    valuesCell.style.fontSize = `${12 + (currentTable - 2) * 2}px`;
    
    row.appendChild(numberCell);
    row.appendChild(valuesCell);


    return row;
}

function appendRowToTable(number, values, backgroundColor) {
    const tableBody = document.getElementById("tableBody");
    const row = createTableRow(number, values, backgroundColor);
    tableBody.appendChild(row);
}

function displayTable() {
    const values = Array.from({ length: 10 }, (_, index) => (index + 1) * currentTable);
    const backgroundColor = colors[(currentTable-2) % colors.length]; // Use modulo to cycle through colors

    appendRowToTable(currentTable, values, backgroundColor);

    currentTable++;
    if (currentTable > 10) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(displayTable, 200);
