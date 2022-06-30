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

//add product
router.post("/product/add", async function (req, res, next) {
  try {
    const newpath = __dirname + "/../public/pic/";
    const file = req.files.product_photo;
    const dotIndex = file.name.lastIndexOf('.');
    const fileExtension = file.name.substr(dotIndex);
    const randomFilename = (new Date()).getTime();
    const filename = randomFilename + fileExtension;
    console.log(req.body);
    console.log(newpath);
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        return(res.status(500).send({ message: "File upload failed" }));
      }
        return(res.status(200).send({ message: 'success', filename: filename }));
    });


    const [rows, fields] = await pool.query(
      `insert into products(
        product_name, 
        product_photo, 
        id_category, 
        hot_price, 
        iced_price, 
        frappe_price) 
        values (?, ?, ?, ?, ?, ?)`,
        [req.body.product_name,filename,parseInt(req.body.id_category),parseInt(req.body.hot_price),parseInt(req.body.iced_price),parseInt(req.body.frappe_price)]);
        if (rows.affectedRows > 0) {
          console.log(rows);
          return res.status(200);
        }
        return res.status(400);
  } 
  catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong" });
  }
});

router.get('/product/del', function(req, res, next) {
  res.send('respond with a resource');
});

//add category
router.post('/category/add',async function(req, res, next){
  try{
    const [rows,fields] = await pool.query(
    `insert into category(category_name)
    value (?)`,[req.body.category_name]);
    
    if(rows.affectedRows > 0){
      console.log(rows);
      return res.status(200);
    }
      return res.status(400);
  }
  catch (err){
    console.log(err);
    return res.status(400).json({message: "Something went wrong"});
  }
});


router.get('/category/del', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/category/edit', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
