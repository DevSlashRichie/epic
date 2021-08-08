const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const fakeCredentials = {
  user: "Ricardo",
  password: "$2a$10$kvrZDQwWWbqY3ZUsKkXrEu5zBIputxJGpHZEdMjELFGY5GH5/dzve"
};


function route(req, res) {

  // validate resources

  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({
      message: "Please insert a username"
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Please insert a password"
    });
  }

  User.findOne({
    where: { username }
  }).then(user => {
    if (!user) {
      return res.status(404).json({
        message: 'Invalid details.'
      });
    }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return res.status(404).json({
          message: 'Invalid details'
        });
      }

      const jwtToken = jwt.sign({
        userId: user.id,
        username: username,
      }, jwtConfig.token, {
        expiresIn: 3600,
      });

      return res.status(200).json({
        jwtToken
      });
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
    console.error(err);
  });



}

module.exports = {
  login: route
}