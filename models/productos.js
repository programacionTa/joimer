// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Productos extends Model{
  static init(sequelize,DataTypes){
    return super.init(
      {
        id:{
          type:DataTypes.INTEGER.UNSIGNED,
          autoIncrement:true,
          primaryKey:true,
        },
        nombre:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        descripcion:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        precio:{
          type: DataTypes.STRING,
          allowNull:false,
        }
      },
      {
        sequelize,
        tableName:'productos',
      }
    );
  }
}

Productos.init(sequelize,DataTypes);

module.exports = Productos;