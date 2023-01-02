const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

exports.getContact = (req, res, next) => {  
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContact = (req, res, next) => {  
  res.redirect('/success');
}