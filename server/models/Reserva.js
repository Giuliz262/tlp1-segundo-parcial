// TODO: Crear modelo de datos de Reserva
const express = require('express');
const router = express.Router();
const Reserva = require('./models/Reserva.js');
const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

// Ruta para crear una reserva
router.post('/', (req, res) => {
  const { dni, nombre, apellido, codigo, fecha } = req.body;

  Reserva.create({ dni, nombre, apellido, codigo, fecha })
    .then(reserva => {
      res.status(201).json(reserva);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear la reserva' });
    });
});


const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Reserva = sequelize.define('Reserva', {
  dni: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },

  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Reserva;


module.exports = router;