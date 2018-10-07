'use strict';
var express = require('express');

module.exports = function (app) {
  var accountController = require('../Controllers/AccountController');
  var apiRoutes = express.Router();
  app.get('/', function (req, res) {
    res.send('We are happy to see you using Chat Bot Webhook');
  });
  // registerUser Route
  app.route('/')
    .post(accountController.processRequest);

    app.post('/login',function(req,res){
      var user_name=req.body.user;
      var password=req.body.password;
      console.log("User name = "+user_name+", password is "+password);
      res.end("yes");
    });  
};
