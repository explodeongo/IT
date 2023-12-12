const fs = require('fs');
const path = require('path');

// Define the folder name and filename
const folderName = 'myfolder';
const fileName = 'myname.txt';
const fileContent = 'my name is';
const rollNumber = '12345';

// Create the folder
fs.mkdirSync(folderName);

// Create the file path
const filePath = path.join(folderName, fileName);

// Write the content to the file
fs.writeFileSync(filePath, fileContent);

// Append the roll number to the file
fs.appendFileSync(filePath, `\nMy roll number is ${rollNumber}`);
console.log(`Folder "${folderName}" and file "${fileName}" created successfully.`);

// Delete the file
fs.unlinkSync(filePath);
console.log(`File "${fileName}" deleted successfully.`);

// Delete the folder
fs.rmdirSync(folderName);
console.log(`Folder "${folderName}" deleted successfully.`);