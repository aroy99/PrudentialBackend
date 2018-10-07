'use strict';
var mongoose = require('mongoose');

var Account = require('./../Models/Account')

exports.processRequest = function (req, res) {
  
  console.log("In function processRequest")
  // console.log("%s", JSON.stringify(req.body))
  // console.log("%s", JSON.stringify(req.body["intent]"))
  if (req.body.queryResult.action == "GetAddress") {
    console.log("%s",   req.body.queryResult.queryText);
    getStreet(req, res);
  }
};

function getStreet(req, res) {
  let acctToSearch = req.body.queryResult && 
                     req.body.queryResult.outputContexts && 
                     req.body.queryResult.outputContexts[0].parameters && 
                     req.body.queryResult.outputContexts[0].parameters.lastName ? req.body.queryResult.outputContexts[0].parameters.lastName : 'Unknown';
  
  
  
  console.log("Last name: " + acctToSearch);
  console.log("Parameters: " + req.body.queryResult.outputContexts[0].parameters.lastName);
  console.log("Query Result: " + JSON.stringify(req.body.queryResult.outputContexts))

  Account.findOne({ lastName: acctToSearch }, function (err, acctExists) {
    if (err) {

      return res.json({
        speech: 'Something went wrong!',
        displayText: 'Something went wrong!',
        source: 'account'
      });
    }else{
      console.log("Found person at " + JSON.stringify(acctExists));
    }
    console.log(acctExists)

    if (acctExists) {
      console.log("Found person at " + acctExists.lastName);

      return res.json({
        speech: acctExists.street,
        displayText: acctExists.street,
        source: 'account'
      });
    }
    else {
      return res.json({
        speech: 'Currently I don\'t have information about this account',
        displayText: 'Currently I don\'t have information about this account',
        source: 'account'
      });
    }
  });
}
