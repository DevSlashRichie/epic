const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

function tokenIsPresent() {
  return (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return res.status(403).json({
        message: "Invalid token."
      });
    }

    next();
  }
}

function tokenIsValid() {
  return (req, res, next) => {
    const tokenHeader = req.header('Authorization');
    const token = tokenHeader.split(' ')[1];


    try {
      const valid = jwt.verify(token, jwtConfig.token);
      if (token) {

        req.user = valid;

        next();
      } else {
        res.status(403).json({
          message: "Invalid token"
        })
      }

    } catch (err) {
      res.status(403).json({
        message: "Invalid token"
      })
    }


  }
}

module.exports = {
  tokenIsValid,
  tokenIsPresent
}