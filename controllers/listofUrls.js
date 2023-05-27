const { urls } = require("../models/");

const getAllItems = async (req, res) => {
  // Fetch all items from the 'urls' model
  const listofUrls = await urls.findAll();

  // Reverse the order of listofUrls
  listofUrls.reverse();

  // Render the 'index' template and pass the reversed listofUrls as the 'programs' variable
  res.render("index", { programs: listofUrls });
};

module.exports = { getAllItems };
