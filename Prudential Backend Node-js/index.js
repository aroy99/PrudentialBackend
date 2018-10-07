'use strict';
var express  = require('express');
// var bodyParser   = require('body-parser'),
var http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose');
// Account     = require('./API/Models/Account'); //created model loading here
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl);


// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json());
server.use(express.json())
server.use(express.urlencoded({extended:false}))  

var routes = require('./API/Routes/Routes'); //importing route
routes(server); //register the route

server.listen((process.env.PORT = process.env.PORT || 8000), function () {
    console.log("Server is up and listening on port " + process.env.PORT);
});
