var express = require("express");
const pool = require("../modules/poolConnection");
var router = express.Router();

/* GET home page. */
router.post("/login", async function (req, res, next) {
  console.log(req.body);
  const { line_id, line_name, line_pic, status } = req.body;
  const [rows, fields] = await pool.query(
    `SELECT line_id, status FROM accounts WHERE line_id = "${line_id}" `
  );
  console.log(rows);
  if (!rows[0]?.line_id) {
    const [rows1, fileds1] = await pool.query(
      "INSERT INTO `accounts`(`line_id`, `line_name`, `line_pic`, `status`) VALUES (?,?,?,?)",
      [line_id, line_name, line_pic, status]
    );
    if (rows1.affectedRows === 1) {
      res.status(200).send(rows1);
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } else {
    // console.log(rows[0].line_id);
    res.status(200).send(rows[0]);
  }
});

module.exports = router;
