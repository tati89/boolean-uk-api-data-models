var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//import routes
const designersRouter = require("./src/resources/designers/router");
const modelsRouter = require("./src/resources/models/router");
const guestsRouter = require("./src/resources/guests/router");
const eventsRouter = require("./src/resources/events/router");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/designers", designersRouter);
app.use("/models", modelsRouter);
app.use("/guests", guestsRouter);
app.use("/events", eventsRouter);
app.all("*", (req, res) => {
  res.json({ msg: true });
});

module.exports = app;
