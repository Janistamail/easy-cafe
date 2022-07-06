var express = require('express');
var router = express.Router();
const pool = require("../modules/poolConnection");
/* GET users listing. */
router.get("/home", async function (req, res, next) {
  // console.log("test");
  try {
    let [rows, fields] = await pool.query(`SELECT h.id_order,p.product_name,h.amount,h.type,h.process FROM history_order as h LEFT JOIN products as p ON h.id_product =p.id_product where h.process != 'D' `);
    console.log("hello");
    return res.status(200).send(rows);
  } catch (e) {
    console.log(e);
    return;
  }
});
router.put("/home/process/accept/:id",async (req,res)=>{
  const id = req.params.id;
  try {
    let [rows, fields] = await pool.query(`UPDATE history_order
    SET history_order.process = 'A'
    WHERE history_order.id_order = ${id};`);
    console.log("hello");
    res.json({
      id : id,
      status : "UPDATE"
    })

  } catch (error) {
    console.log(error);
  }



})
router.put("/home/process/processing/:id",async (req,res)=>{
  const id = req.params.id;
  try {
    let [rows, fields] = await pool.query(`UPDATE history_order
    SET history_order.process = 'P'
    WHERE history_order.id_order = ${id};`);
    console.log("hello");
    res.json({
      id : id,
      status : "UPDATE"
    })

  } catch (error) {
    console.log(error);
  }



})

router.put("/home/process/done/:id",async (req,res)=>{
  const id = req.params.id;
  try {
    let [rows, fields] = await pool.query(`UPDATE history_order
    SET history_order.process = 'D'
    WHERE history_order.id_order = ${id};`);
    console.log("hello");
    res.json({
      id : id,
      status : "UPDATE"
    })

  } catch (error) {
    console.log(error);
  }



})
router.get('/success', async function(req, res, next) {
  try {
    let [rows, fields] = await pool.query(`SELECT h.id_order,p.product_name,h.amount,h.type,h.at_date FROM history_order as h LEFT JOIN products as p ON h.id_product =p.id_product WHERE h.process = 'D'`);
    console.log("hello");
    return res.status(200).send(rows);
  } catch (e) {
    console.log(e);
    return;
  }
});

module.exports = router;
