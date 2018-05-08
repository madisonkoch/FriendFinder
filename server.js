var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//Set up Express App
var app = express();
var PORT = 3000;

//Make the Express app able to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

