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
        codigo:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        producto:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        categoria_id:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        existencia_actual:{
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