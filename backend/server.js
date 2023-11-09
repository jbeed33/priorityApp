const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ message: "Hello world you are awsome" });
});

app.listen(port, () => console.log("listening on port 3000"));
