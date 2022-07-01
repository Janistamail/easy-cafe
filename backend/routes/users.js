var express = require("express");
var router = express.Router();
const axios = require("axios");
const pool = require("../modules/poolConnection");

//แสดงเมนูแต่ละ category
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

//แสดง category ที่หัว navbar ทั้งหมด
router.get("/allCategory", async function (req, res, next) {
  // console.log("test");
  try {
    let [rows, fields] = await pool.query(`SELECT * FROM category`);
    // console.log(rows);
    res.status(200).send(rows);
  } catch (e) {
    console.log(e);
  }
});

// //เก็บ order ที่ลูกต้า ADD
router.post("/cart", async function (req, res, next) {
  // console.log(req.body);
  const { id_account, drinkType, productName, quantity, status_pay } = req.body;
  const [rows, fileds] = await pool.query(
    `SELECT id_product FROM products WHERE products.product_name = "${productName}"`
  );
  // console.log("rrr", rows[0].id_product);

  if (rows[0]) {
    console.log("id_account", id_account);
    const [rows1, fields1] = await pool.query(
      `INSERT INTO cart (id_account, id_product, amount_cup, type, status_pay) VALUES (?,?,?,?,?) `,
      [id_account, rows[0].id_product, quantity, drinkType, status_pay]
    );
  }
});

//กด Cart แล้วแสดงของที่อยู่ใน cart ทั้งหมด
router.post("/showCart", async function (req, res, next) {
  // console.log(req.body);
  const { id_account } = req.body;
  // console.log("id_accountid_account", id_account);

  const [rows, fields] = await pool.query(
    `SELECT * FROM cart WHERE cart.id_account = ${id_account}`
  );
  res.status(200).json(rows);
  // console.log("showCart", rows);
});

router.put("/edit/:id", async function (req, res, next) {
  // console.log("test", req.params.id);
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
