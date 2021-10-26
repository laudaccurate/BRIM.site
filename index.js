const path = require("path");
const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("SUCCESS: Database Connection Successful"))
  .catch(() => console.log("ERROR: Database Connection Failure"));

const db = mongoose.connection;

app.use(
  session({
    saveUninitialized: false,
    resave: true,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      mongooseConnection: db
    })
  })
);

require("./models");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

require("./routes")(app);

const PORT = process.env.PORT || 5050;
http
  .createServer(app)
  .listen(PORT)
  .on("listening", () => console.log(`Server running on PORT ${PORT}`));
