const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage:path.join(__dirname,"base","datos.db"), // Ruta y nombre del archivo de la base de datos
});

module.exports = sequelize;