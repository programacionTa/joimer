// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Requisicion extends Model{
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
        nombreP:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        descripcionP:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        cantidad:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        fecha:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        iProveedor:{
          type: DataTypes.STRING,
          allowNull:false,
        },
      },
      {
        sequelize,
        tableName:'requisicion',
      }
    );
  }
}

Requisicion.init(sequelize,DataTypes);

module.exports = Requisicion;