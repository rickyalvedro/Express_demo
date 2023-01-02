const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const contactController = require('../controllers/contact');

router.get("/contactus", contactController.getContact);

router.post("/contactus", contactController.postContact);
// (req, res, next) => {

//   res.sendFile(path.join(rootDir, "views", "success.html"));

module.exports = router;
