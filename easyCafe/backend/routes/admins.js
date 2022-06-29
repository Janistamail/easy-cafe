var express = require('express');
var router = express.Router();
const axios = require("axios");
const pool = require("../modules/poolConnection");

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/product/edit', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/add", async function (req, res, next) {

  const [rows, fields] = await pool.query(
    `insert into products(
      product_name, 
      product_photo, 
      id_category, 
      hot_price, 
      iced_price, 
      frappe_price) 
      values (?, ?, ?, ?, ?, ?)`,
      [req.body.product_name,req.body.product_photo,req.body.id_category,req.body.hot_price,req.body.iced_price,req.body.frappe_price]);
  rows.affectedRows > 0
    ? res.status(200).json(rows.affectedRows)
    : res.status(400).send("No data");
});
router.get('/product/del', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/add', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/del', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/edit', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
