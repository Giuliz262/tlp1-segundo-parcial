// TODO: Crear modelo de datos de Reserva
const express = require('express');
const router = express.Router();
const Reserva = require('./models/Reserva.js');

// Ruta para crear una reserva
router.post('/', (req, res) => {
  const { nombre, apellido, dni, codigo, fecha } = req.body;

  Reserva.create({ nombre, apellido, dni, codigo, fecha })
    .then(reserva => {
      res.status(201).json(reserva);
    })
    .catch(error => {
      res.status(500).json({ error: 'Error al crear la reserva' });
    });
});

module.exports = router;