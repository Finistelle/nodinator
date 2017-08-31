const mongoose = require('mongoose');
const faker = require('faker');
const config = require('./../../config/config_dev');
const Article = require('./../model/article/ArticleSchema');
const User = require('./../model/user/UserSchema');

mongoose.connect(`mongodb://${config.database_host}:${config.database_port}/${config.database_name}`, () => {
  for (let i = 1; i <= 5; i++) {
    User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      roles: 'ROLE_USER',
      password: 'user',
      email: faker.internet.email()
    }).catch(err => {
      if (err) return handleError(err);
    })
  }

  for (let y = 1; y <= 15; y++) {
    User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      roles: 'ROLE_ADMIN',
      password: 'admin',
      email: faker.internet.email(),
    }).then(user => {
        Article.create({
          title: faker.name.title(),
          content: faker.lorem.paragraph(),
          slug: faker.lorem.slug(),
          status: 'DRAFT',
          user_id: user._id
        }).then(article => {
          user.articles.push(article._id);
          user.save();
        })
    }).catch(err => {
      if (err) return handleError(err);
    })
  }
});
