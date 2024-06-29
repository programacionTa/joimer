const Sequelize = require('sequelize');

const sequelize = new Sequelize('proyecto6','proyecto6','b)wSABJJFIqlGM0Z', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports=sequelize;