const { dbHost, dbUser, dbPort, dbPassword, database } = require('.');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  port: dbPort,
  password : dbPassword,
  database: database
});

module.exports = connection;