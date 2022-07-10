const express = require("express");
const sitings = require("./sitings.json");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome my bird sitings API!");
});

app.get("/sitings", (req, res) => {
  res.status(200).json(sitings);
});

app.listen(port, () => {
  console.log(`Bird siting API listening on port ${port}`);
});
