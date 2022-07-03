var express = require("express");
var router = express.Router();
const axios = require("axios");
const pool = require("../modules/poolConnection");

router.get("/home/:params", async function (req, res, next) {
  try {
    let [rows, fields] = await pool.query(
      `SELECT * FROM products WHERE products.id_category = (SELECT category.id_category FROM category WHERE category.category_name = '${req.params.params}')`
    );
    res.status(200).send(rows);
  } catch (e) {
    console.log(e);
  }
});

router.get("/allCategory", async function (req, res, next) {
  // console.log("test");
  try {
    let [rows, fields] = await pool.query(`SELECT * FROM category`);
    console.log(rows);
    res.status(200).send(rows);
  } catch (e) {
    console.log(e);
  }
});

// router.get("/cart", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.put("/edit/:id", async function (req, res, next) {
  console.log("test", req.params.id);
  const [rows, fields] = await pool.query(
    `update products set 
    product_name = "${req.body.product_name}" , 
    product_photo = "${req.body.product_photo}",
    id_category = ${req.body.id_category},
    hot_price = ${req.body.hot_price},
    iced_price = ${req.body.iced_price},
    frappe_price = ${req.body.frappe_price}
    where id_product = ${req.params.id}`
    // [req.params.id]
  );

  rows.affectedRows > 0
    ? res.status(200).json(rows.affectedRows)
    : res.status(400).send("No data");
});

// router.get("/notification", function (req, res, next) {
//   res.send("respond notification");
// });

module.exports = router;
