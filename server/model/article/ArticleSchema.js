const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  slug: String,
  status: String,
});

let ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;
