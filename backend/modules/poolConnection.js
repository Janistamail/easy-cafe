var mysql = require("mysql2/promise");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "easyCafe",
  port: 3306,
});

module.exports = pool;
