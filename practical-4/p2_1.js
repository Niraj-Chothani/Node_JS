var fs = require("fs");

// Synchronous read
console.log("Synchronous read method:");
var data = fs.readFileSync('read.txt');
console.log("Data in the file is - " + data.toString());
