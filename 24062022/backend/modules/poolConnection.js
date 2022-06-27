var mysql = require("mysql2/promise");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "easyCafe",
  port: 8889,
});

module.exports = pool;
