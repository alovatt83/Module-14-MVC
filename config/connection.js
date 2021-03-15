const Sequelize = require('sequelize');

require('dotenv').config();

// Database Connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'us-cdbr-east-03.cleardb.comg',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;

