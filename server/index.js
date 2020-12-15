const express = require("express");
const fetch = require("node-fetch");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.post("/search", async function (req, res) {
  try {
    const url = `http://newsapi.org/v2/everything?q=${req.body.data}&sortBy=publishedAt&apiKey=f8f927bf841f4e1b90e7ab84ae861a64`;
    const fetchResponse = await fetch(url);
    const json = await fetchResponse.json();
    res.send(json);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
});

app.get("/", function (req, res) {
  res.send("Server-side responding.");
});
const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
