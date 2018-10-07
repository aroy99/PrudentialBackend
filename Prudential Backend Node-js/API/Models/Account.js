var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
  street: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false
  },
  zip: {
    type: Number,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  accountNumber: {
    type: Number,
    required: false
  },
  policyType: {
    type: String,
    required: false
  },
  policyStatus: {
    type: String,
    required: false
  },
  accountBalance: {
    type: String,
    required: false
  }
});
// mongoose.model('fakeInfo', Account);
var Account = mongoose.model('account', AccountSchema);
module.exports = Account;
