const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");

const routes = require("./routes/upload");
// require("dotenv").config();
const { urls } = require("./models");
// Set the view engine to EJS
app.set("view engine", "ejs");
// Routes
app.use("/", routes);

app.use(express.urlencoded({ extended: true }));

app.post("/upload", async (req, res) => {
  await urls.create(req.body);
  console.log("Program uploaded successfully.");
  res.redirect("/");
});

// Start the server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Server running on port " + port);
  });
});
