const express = require("express");

// create an app
const app = express();

app.get("/", (req, res) => {
  res.send("Hi There");
});

app.listen(5000);
