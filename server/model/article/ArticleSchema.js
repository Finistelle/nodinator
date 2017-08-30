const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  slug: String,
  status: String,
  user_id: mongoose.Schema.ObjectId
});

const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
