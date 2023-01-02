const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

exports.getSuccessPage = (req, res, next) => {

    res.sendFile(path.join(rootDir, "views", "success.html"));
};