const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

let ArticleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    slug: {type: String, unique: true},
    status: {type: String},
    user_id: {type: mongoose.Schema.ObjectId, ref: 'User'},
  },{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

ArticleSchema.plugin(URLSlugs('title', {field: 'slug'}));

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
