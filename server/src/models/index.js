const config = require('../config/db.config');

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorAliases: false,

    pool: config.pool
  }
);

const db = {
    Sequelize : Sequelize,
    sequelize : sequelize,


    User: require('./user.model')(sequelize, Sequelize)
}

module.exports = db;