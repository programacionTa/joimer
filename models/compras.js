// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Compras extends Model{
  static init(sequelize,DataTypes){
    return super.init(
      {
        id:{
          type:DataTypes.INTEGER.UNSIGNED,
          autoIncrement:true,
          primaryKey:true,
        },
        iReq:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        precioProductos:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        fecha:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        precioTotal:{
          type: DataTypes.STRING,
          allowNull:false,
        }
      },
      {
        sequelize,
        tableName:'compras',
      }
    );
  }
}

Compras.init(sequelize,DataTypes);

module.exports = Compras;