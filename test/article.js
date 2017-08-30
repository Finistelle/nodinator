process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server');
let should = chai.should();
const Article = require('./../server/model/article/ArticleSchema');

chai.use(chaiHttp);

describe('Article', () => {
  beforeEach((done) => {
    Article.remove({}, (err) => {
      done();
    });
  });

  describe('Article', () => {
    it('it should get 403 response with an success: false result', (done) => {
      chai.request(server)
        .get('/api/articles')
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.eql({
            "message": "No token provided.",
            "success": false
          });
          done();
        })
    });
    it('should list ALL articles on /articles GET', (done) => {
      chai.request(server)
        .get('/articles')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql({});
          done();
        });
    });
    it('should list a SINGLE article on /article/<id> GET', (done) => {
      let newArticle = new Article({
        title: 'My Title',
        content: 'My awesome content.',
        slug: 'my-slug',
        status: 'DRAFT',
      });
      newArticle.save((err, article) => {
        chai.request(server)
          .get('/article/' + article.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    });
  });
});
