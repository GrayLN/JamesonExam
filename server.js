// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

app.get("/index.html", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/brick.html", function(request, response) {
  response.sendFile(__dirname + "/views/brick.html");
});

app.get("/log-in.html", function(request, response) {
  response.sendFile(__dirname + "/views/log-in.html");
});

app.get("/sign-up.html", function(request, response) {
  response.sendFile(__dirname + "/views/sign-up.html");
});

