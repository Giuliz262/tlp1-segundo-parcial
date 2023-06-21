const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_RESERVADB, process.env.DB_GIULIANA, process.env.DB_45381, {
  host: process.env.DB_LOCALHOST,
  port: process.env.DB_3306,
  dialect: process.env.DB_MYSQL
});

module.exports = sequelize;