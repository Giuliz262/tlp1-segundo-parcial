require('dotenv').config();

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const sequelize = require('./database'); 

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(path());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
