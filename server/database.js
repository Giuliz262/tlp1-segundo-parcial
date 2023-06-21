const { sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new sequelize('reservadb',  {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

module.exports = {
    sequelize,
    DataTypes,
    Model
}