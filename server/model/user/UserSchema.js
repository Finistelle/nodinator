const mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    roles: Array,
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    articles: [{type: mongoose.Schema.ObjectId, ref: 'Article'}],
    orders: [{type: mongoose.Schema.ObjectId, ref: 'Order'}],
  },{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

let UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
