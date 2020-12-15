const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'acif', 
  'postgres', 
  'docker', 
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  }
);
module.exports = sequelize;