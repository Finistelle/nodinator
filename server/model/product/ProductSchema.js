const mongoose = require("mongoose");
const URLSlugs = require('mongoose-url-slugs');

let ProductSchema = mongoose.Schema({
    title: {type: String, required: true},
    type: {type: String, required: true},
    price: {type: Number, required: true},
    media_id: {type: mongoose.Schema.ObjectId, ref: 'Media'},
  },{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

ProductSchema.plugin(URLSlugs('title', {field: 'slug'}));

let ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
