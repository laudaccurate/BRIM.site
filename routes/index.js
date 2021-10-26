// const mongoose = require("mongoose");

module.exports = (app) => {
  app.get("/", (req, res) => {
    return res.render("home");
  });

  app.get("/about", (req, res) => {
    return res.render("about-1");
  });
};
