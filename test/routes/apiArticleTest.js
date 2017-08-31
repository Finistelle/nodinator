process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../server');
let should = chai.should();
const Article = require('./../../server/model/article/ArticleSchema');
const User = require('./../../server/model/user/UserSchema');

chai.use(chaiHttp);

describe('Article', () => {
  beforeEach((done) => {
    Article.remove({}, (err) => {
      done();
    });
  });

  it('should get 403 response with an success: false result', (done) => {
    chai.request(server)
      .get('/api/articles')
      .end((err, res) => {
        res.should.have.status(403);
        res.body.should.be.eql({
          "message": "No token provided.",
          "success": false
        });
        done();
      });
  });
});

describe('Article', () => {
  beforeEach((done) => {
    User.create({
      _id: '59a69423454170614a76a901',
      firstName: 'Sarah',
      lastName: 'Touati',
      roles: 'ROLE_USER',
      password: 'user',
      email: 'sarah@gmail.com'
    }, (err) => {
      done();
    });
  });

  it('should list ALL articles on /articles GET', (done) => {
    let user = {
      email: 'sarah@gmail.com',
      password: 'user'
    };
    let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
    tokenReq.end((err, res) => {
      let token = res.body.token;
      chai.request(server)
        .get('/api/public/articles')
        .set('x-access-token', token)
        .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
  });

  it('should list a SINGLE article on /article/<id> GET', (done) => {
    let user = {
      email: 'sarah@gmail.com',
      password: 'user'
    };
    let newArticle = new Article({
      title: 'My Title',
      content: 'My awesome content.',
      slug: 'my-slug',
      status: 'DRAFT',
    });
    let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
    tokenReq.end((err, res) => {
      let token = res.body.token;
      newArticle.save((err, article) => {
        chai.request(server)
          .get('/api/article/' + article.id)
          .set('x-access-token', token)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    });
  });
});
