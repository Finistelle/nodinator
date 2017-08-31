process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const User = require("./../../server/model/user/UserSchema");

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../../server');
const should = chai.should();

/* Test GET /users */
/* With an empty database I should'nt get any User */
chai.use(chaiHttp);

// Empty database before test
describe('User error', () => {
  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  describe('GET empty users', () => {
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

describe('User REST api GET', () => {

  let token = '';

  beforeEach((done) => {
    User.create({
      _id: '59a69423454170614a76a900',
      firstName: 'jean',
      lastName: 'test',
      roles: 'ROLE_USER',
      password: 'test',
      email: 'test@test.com',
      created_at: "2017-08-30T12:21:14.971Z",
      updated_at: "2017-08-30T12:21:14.971Z"
    }, (err) => {
      done();
    });
  });

  describe('GET users', () => {
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
                "orders": [],
                "email": "test@test.com",
                "firstName": "jean",
                "lastName": "test",
                "password": "test",
                "created_at": "2017-08-30T12:21:14.971Z",
                "updated_at": "2017-08-30T12:21:14.971Z",
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

  describe('GET user by id', () => {
    it('it should get 200 response with one result', (done) => {
      let user = {
        email: 'test@test.com',
        password: 'test'
      };
      let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
      tokenReq.end((err, res) => {
        token = res.body.token;
        let req = chai.request(server)
          .get('/api/user/59a69423454170614a76a900')
          .set('x-access-token', token);
        req.end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql({
            "success": true,
            "user": {
              "__v": 0,
              "_id": "59a69423454170614a76a900",
              "articles": [],
              "created_at": "2017-08-30T12:21:14.971Z",
              "email": "test@test.com",
              "firstName": "jean",
              "lastName": "test",
              "orders": [],
              "password": "test",
              "roles": [
                "ROLE_USER"
              ],
              "updated_at": "2017-08-30T12:21:14.971Z"
            }
          });
          done();
        });
      });
    });
  });
});

describe('User REST api PUT', () => {
  let token = '';

  beforeEach((done) => {
    User.create({
      _id: '59a69423454170614a76a900',
      firstName: 'jean',
      lastName: 'test',
      roles: 'ROLE_USER',
      password: 'test',
      email: 'test@test.com',
      created_at: "2017-08-30T12:21:14.971Z",
      updated_at: "2017-08-30T12:21:14.971Z"
    }, (err) => {
      done();
    });
  });

  describe('PUT user', () => {
    it('it should get 200 response with one result', (done) => {
      let user = {
        email: 'test@test.com',
        password: 'test'
      };
      let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
      tokenReq.end((err, res) => {
        token = res.body.token;
        user = {
          email: 'test@update.com'
        };
        let req = chai.request(server)
          .put('/api/user/59a69423454170614a76a900')
          .set('x-access-token', token)
          .send(user);
        req.end((err, res) => {
          res.should.have.status(200);
          res.body.user.email.should.be.eql("test@update.com");
          res.body.success.should.be.eql(true);
          done();
        });
      });
    });
  });
});

describe('User REST api DELETE', () => {

  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  beforeEach((done) => {
    User.create({
      _id: '59a69423454170614a76a900',
      firstName: 'jean',
      lastName: 'test',
      roles: 'ROLE_USER',
      password: 'test',
      email: 'test@test.com',
      created_at: "2017-08-30T12:21:14.971Z",
      updated_at: "2017-08-30T12:21:14.971Z"
    }, (err) => {
      done();
    });
  });

  describe('DELETE user', () => {
    it('it should get 200 response with success true', (done) => {
      let user = {
        email: 'test@test.com',
        password: 'test'
      };
      let tokenReq = chai.request(server).post('/api/oauth/authenticate').send(user);
      tokenReq.end((err, res) => {
        let token = res.body.token;
        let req = chai.request(server)
          .delete('/api/user/59a69423454170614a76a900')
          .set('x-access-token', token);
        req.end((err, res) => {
          res.should.have.status(200);
          res.body.success.should.be.eql(true);
          done();
        });
      });
    });
  });
});
