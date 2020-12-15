const Sequelize = require('sequelize');
const db = require('../../database/database');


const cliente_tipo = db.define(
  'cliente_tipo',
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      required: true 
    }
  },
  {
    tableName: 'cliente_tipo',
    schema: 'public',
    freezeTableName: false,
    timestamps:false
  }
)

module.exports =  cliente_tipo;
