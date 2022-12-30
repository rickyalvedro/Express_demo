const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  // console.log("In middleware!");
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/success", (req, res, next) => {
  // console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
