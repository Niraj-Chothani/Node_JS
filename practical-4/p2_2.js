var fs = require("fs");
	
// Asynchronous read
console.log("Asynchronous read method:");
fs.readFile('read2.txt', function (err, data) {
if (err) {
	return console.error(err);
}
console.log("Data in the file is - " + data.toString());
});
