process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const User = require("./../server/model/user/UserSchema");

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../server');
const should = chai.should();

/* Test GET /users */
/* With an empty database I should'nt get any User */
chai.use(chaiHttp);

// Empty database before test
describe('User', () => {
  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  describe('/GET empty users', () => {
    it('it should get 403 response with an success: false result', (done) => {
      "use strict";
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(403);
          res.body.should.be.eql({
            "message": "No token provided.",
            "success": false
          });
          done();
        })
    })
  });
});

describe('User', () => {

  let token = '';

  beforeEach((done) => {
    User.create({
      _id: '59a69423454170614a76a900',
      firstName: 'jean',
      lastName: 'test',
      roles: 'ROLE_USER',
      password: 'test',
      email: 'test@test.com'
    }, (err) => {
      done();
    });
  });

  describe('/GET one users', () => {
    it('it should get 200 response with one result', (done) => {
      let user = {
        email: 'test@test.com',
        password: 'test'
      };
      let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
      tokenReq.end((err, res) => {
        token = res.body.token;
        let req = chai.request(server)
          .get('/api/users')
          .set('x-access-token', token);
        req.end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql({
            "users": [
              {
                "__v": 0,
                "_id": "59a69423454170614a76a900",
                "articles": [],
                "email": "test@test.com",
                "firstName": "jean",
                "lastName": "test",
                "password": "test",
                "roles": [
                  "ROLE_USER"
                ]
              }
            ]
          });
          done();
        });
      });
    })
  });
});
