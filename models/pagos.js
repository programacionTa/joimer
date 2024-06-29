// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Pagos extends Model{
  static init(sequelize,DataTypes){
    return super.init(
      {
        id:{
          type:DataTypes.INTEGER.UNSIGNED,
          autoIncrement:true,
          primaryKey:true,
        },
        iCompras:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        iProveedor:{
          type: DataTypes.STRING,
          allowNull:false,
        }
      },
      {
        sequelize,
        tableName:'pagos',
      }
    );
  }
}

Pagos.init(sequelize,DataTypes);

module.exports = Pagos;