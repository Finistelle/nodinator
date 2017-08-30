const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  slug: {type: String, unique: true},
  status: {type: String},
  user_id: mongoose.Schema.ObjectId
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
