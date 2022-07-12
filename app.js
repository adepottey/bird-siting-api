const express = require("express");
var cors = require("cors");
const sightings = require("./sightings.json");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome my bird sightings API!");
});

app.get("/sightings", (req, res) => {
  res.status(200).json(sightings);
});

app.listen(port, () => {
  console.log(`Bird sighting API listening on port ${port}`);
});
