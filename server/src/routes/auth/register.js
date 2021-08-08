const bcrypt = require('bcryptjs');
const { User } = require('../../models/index');

function route(req, res) {

  const { username, password } = req.body;


  if (!username || !password) {
    return res.status(400).json({
      message: 'Missing field, password or username'
    });
  }


  const cryptedPassword = bcrypt.hashSync(password, 10);

  User.create({
    username,
    password: cryptedPassword
  }).then(user => {
    res.json({
      ...user
    });
  }).catch(err => {

    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(500).json({
        message: "The username is taken.",
      });
    }

    res.status(500).json({
      message: err.message,
    });
  });

}

module.exports = {
  register: route
}