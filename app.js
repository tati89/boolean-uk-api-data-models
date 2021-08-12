var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//import routes
const designersRouter = require("./src/resources/designers/router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/designers", designersRouter);
app.all("*", (req, res) => {
  res.json({ msg: true });
});

module.exports = app;
