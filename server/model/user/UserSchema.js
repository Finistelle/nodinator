const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  roles: String,
  password: String,
  email: String
});

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
