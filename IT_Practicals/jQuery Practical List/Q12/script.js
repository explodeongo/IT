// Part I: Create JavaScript Object "Client"
function Client(firstName, lastName, address, city, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.phone = phone;
}

// Part II: Additional Features
var client = new Client();

function setClientData(property) {
    var value = document.getElementById(property).value;
    client[property] = value;
}

function displayClientInfo() {
    var clientInfoTextArea = document.getElementById('clientInfo');
    clientInfoTextArea.value = '';

    for (var property in client) {
        if (client.hasOwnProperty(property)) {
            clientInfoTextArea.value += property + ': ' + client[property] + '\n';
        }
    }
}