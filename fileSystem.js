var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});
console.log("\n");

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

var data = fs.readFileSync('outPut.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
