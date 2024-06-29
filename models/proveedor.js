// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Proveedor extends Model{
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
        apellido:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        cedula:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        rif:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        telefono:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        correo:{
          type: DataTypes.STRING,
          allowNull:false,
        },
         direccion:{
          type: DataTypes.STRING,
          allowNull:false,
        },
         empresa:{
          type: DataTypes.STRING,
          allowNull:false,
        }
      },
      {
        sequelize,
        tableName:'proveedor',
      }
    );
  }
}

Proveedor.init(sequelize,DataTypes);

module.exports = Proveedor;