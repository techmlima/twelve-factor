require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST, 
  dbUser: process.env.DB_USER, 
  dbPort: process.env.DB_PORT,
  dbPassword: process.env.DB_PASSWORD,
  database: process.env.DATA_BASE
};