var mysql = require("mysql2/promise");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  // password: "root",
  database: "easycafe",
  port: 3306,
});

module.exports = pool;
