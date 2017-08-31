const mongoose = require("mongoose");
const URLSlugs = require('mongoose-url-slugs');

let MediaSchema = mongoose.Schema({
    name: {type: String, required: true},
    url: {type: String, required: true},
    mimeType: {type: String },
    code: {type: String},
  },{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

let MediaModel = mongoose.model('Media', MediaSchema);

module.exports = MediaModel;
