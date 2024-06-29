// categorias.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conexion');

class Usuarios extends Model{
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
        correo:{
          type: DataTypes.STRING,
          allowNull:false,
        },
        password:{
          type: DataTypes.STRING,
          allowNull:false,
        }
      },
      {
        sequelize,
        tableName:'usuarios',
      }
    );
  }
}

Usuarios.init(sequelize,DataTypes);

module.exports = Usuarios;