const express = require("express");

const router = express.Router();

// /admin/add-product => GET request
router.get("/add-product", (req, res, next) => {
  // console.log("In middleware!");
  res.send(
    `<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>`
  );
});

// /admin/add-product => POST request
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
