const Sequelize = require('sequelize');
const db = require('../../database/database');


const cliente = db.define(
  'cliente',
  {
    id: {
      type: Sequelize.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true
    },
    id_cliente_tipo: {
      type: Sequelize.INTEGER,
      required: true,
    },
    nome: {
      type: Sequelize.STRING,
      required: true 
    },
    cep: {
      type: Sequelize.INTEGER,
      required: true 
    },
    rua: {
      type: Sequelize.STRING,
      required: true 
    },
    bairro: {
      type: Sequelize.STRING,
      required: true 
    },
    numero: {
      type: Sequelize.STRING,
      required: true 
    },
    cidade: {
      type: Sequelize.STRING,
      required: true 
    },
    uf: {
      type: Sequelize.STRING,
      required: true 
    }
  },
  {
    tableName: 'cliente',
    schema: 'public',
    freezeTableName: false,
    timestamps:false
  }
)
module.exports =  cliente;
