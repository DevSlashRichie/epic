const express = require('express');
const router = express.Router();
const middleware = require('../middlewares/authMiddlewares');

const authRoutes = require('./auth');

router.use('/auth', authRoutes);

router.get('/home', middleware.tokenIsPresent(), middleware.tokenIsValid(), (req, res) => {
  res.status(200).json({
    ...req.user
  });
});

module.exports = router;