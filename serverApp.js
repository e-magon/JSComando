var robot = require("robotjs"); //used to simulate key taps
var express = require('express'); //used to accept http requests
var app = express();

//Used to show hosting IPs:
var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];

// http://expressjs.com/en/starter/static-files.html
// Needed to make static files in the public folder (like css) visible to clients
app.use(express.static('public'));

//Tap spacebar for pause and resume:
app.get("/playpause/", function (request, response) {
  robot.keyTap("space")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap F for fullscreen:
app.get("/fullscreen/", function (request, response) {
  robot.keyTap("f")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap left arrow for rewind:
app.get("/back/", function (request, response) {
  robot.keyTap("left")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap right arrow for fast forward:
app.get("/forward/", function (request, response) {
  robot.keyTap("right")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap volume down:
app.get("/audiodown/", function (request, response) {
  robot.keyTap("audio_vol_down")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap mute audio:
app.get("/mute/", function (request, response) {
  robot.keyTap("audio_mute")
  // OK to client
  response.writeHead(200);
  response.end("");
})

//Tap volume up:
app.get("/audioup/", function (request, response) {
  robot.keyTap("audio_vol_up")
  // OK to client
  response.writeHead(200);
  response.end("");
})


// http://expressjs.com/en/starter/basic-routing.html
// Send HTML page to generic get requests
app.get("/", function (request, response) {
  response.sendFile('/public/index.html');
});


app.listen(80)
console.log("Avviato sulla porta 80 degli indirizzi: ")
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
console.log(addresses);
