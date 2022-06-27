var express = require('express');
var router = express.Router();
const axios = require("axios");
const pool = require("../modules/poolConnection");

/* GET users listing. */

router.get("/home", async function (req, res, next) {
  // console.log("test");
  try {
    let [rows, fields] = await pool.query(`SELECT h.id_order,p.product_name,h.amount,h.type FROM history_order as h LEFT JOIN products as p ON h.id_product =p.id_product`);
    console.log("hello");
    return res.status(200).send(rows);
  } catch (e) {
    console.log(e);
    return;
  }
});

router.get('/success', function(req, res, next) {
  res.send('respond with a resource');
});





module.exports = router;
