//Testing Node.JS
console.log("Hello Node Is Working Fine!\n\n");

//Import Required Modules --Step 1

var http = require("http");

//Create Server -- Step 2  & Step 3 Testing

// Send the HTTP header 
// HTTP Status: 200 : OK
// Content Type: text/plain
http.createServer(function(request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});

// Send the response body as "Hello World"
response.end("Hello World!\n");
}).listen(8081)

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/\n\n');

//express Modules

var express = require('express');


//CallBacks 

//Blocking Code Example

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log(" Blocking Code Program Ended\n\n");

//Non-Blocking Code Example

var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Non-Blocking Code Program Ended");



