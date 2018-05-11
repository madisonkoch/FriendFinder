var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//create an "express" server
var app = express();

//set initial port
var PORT = process.env.PORT || 3000;

//make express able to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//ROUTES
require('./app/routing/apiRoutes')(app);
require("./app/routing/htmlRoutes")(app);

//Active Server
app.listen(PORT, function() {
    console.log("App listening on  http://localhost:" + PORT);
  });