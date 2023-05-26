// Handle GET request to display programs

const urls = require("../models/urls");
const getAllItems = async (req, res) => {
  const listofUrls = await urls.findAll();
  res.render("index", { programs: listofUrls });
};

module.exports = { getAllItems };
