const express = require("express");
const app = express();

const logger = require("./logger");

app.use(logger); // we need to check the order, it always be on top of the element

// app.use('/api',logger)  // it only apply which api start with api

// req => middleware => res

// if you write outside then you need to send back the server so we use next

app.get("/", (req, res) => {
  // express automatically pass req and res to logger
  res.send("home");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/api/product", (req, res) => {
  res.send("about");
});
app.get("/api/items", (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
