process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let User = require("./../server/model/user/UserSchema");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./../server');
let should = chai.should();

/* Test GET /users */
/* With an empty database I should'nt get any User */
chai.use(chaiHttp);

// Empty database before test
describe('User', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  describe('/GET users', () => {
    it('it should get 200 response with empty result', (done) => {
      "use strict";
      chai.request(server)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.eql({});
          done();
        })
    })
  })
});
