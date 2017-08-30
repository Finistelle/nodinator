const mongoose = require("mongoose");
const URLSlugs = require('mongoose-url-slugs');

let OrderSchema = mongoose.Schema({
    customer: {type: mongoose.Schema.ObjectId, ref: 'User'},
    products: [{type: mongoose.Schema.ObjectId, ref: 'Product'}],
    status: {type: String},
  },{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

OrderSchema.plugin(URLSlugs('customer.firstName status createdAt', {field: 'slug'}));

let OrderProduct = mongoose.Model('Order', OrderSchema);

module.exports = OrderProduct;
