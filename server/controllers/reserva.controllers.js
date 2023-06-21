const Reserva = require('../models/Reserva');
const ctrlReservas = {};

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

// Obtener una reserva por su ID
ctrlReservas.obtenerReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
  const { dni, nombre, apellido, codigo, fecha } = req.body;

  try {
    const reserva = await Reserva.create({ dni, nombre, apellido, codigo, fecha });
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};

// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res) => {
  const { id } = req.params;
  const { dni, nombre, apellido, codigo, fecha } = req.body;

  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
        reserva.dni = dni;
      reserva.nombre = nombre;
      reserva.apellido = apellido;
      reserva.codigo = codigo;
      reserva.fecha = fecha;
      await reserva.save();
      res.json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la reserva' });
  }
};

// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
  const { id } = req.params;

  try {
    const reserva = await Reserva.findByPk(id);
    if (reserva) {
      reserva.estado = 'eliminada';
      await reserva.save();
      res.json({ mensaje: 'Reserva eliminada exitosamente' });
    } else {
      res.status(404).json({ error: 'Reserva no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};

module.exports = ctrlReservas;

module.exports = ctrlReservas;