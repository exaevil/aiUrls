const express = require("express");
const routers = express.Router();
const { getAllItems } = require("../controllers/listofUrls");

routers.route("/").get(getAllItems);

module.exports = routers;
