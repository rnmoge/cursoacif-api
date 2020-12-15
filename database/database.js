const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'acif', 
  process.env.DATABASE_USER || 'postgres', 
  process.env.DATABASE_PASS || 'docker', 
  {
    host: process.env.DATABASE_HOST || 'localhost',
    dialect: 'postgres',
    quoteIdentifiers: false,
    operatorsAliases: false
  }
);
module.exports = sequelize;