let configDesignation = `./../../../config/config_${process.env.NODE_ENV}`;

const config = require(configDesignation);
const User = require('../../model/user/UserSchema');
class Checker {

  authorize(req, res, next, permission) {
    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      User.findOne({id: token.id}, (err, user) => {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Cannot authenticate user'
          });
        } else if (permission) {
          for (let role in permission) {
            if (user.roles.includes(permission[role])) {
              return next();
            }
          }
          res.status(403).send({
            success: false,
            message: 'Forbidden You don\'t have permission'
          });
        } else {
          next();
        }
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'No token provided'
      });
    }
  }
}

module.exports = Checker;
