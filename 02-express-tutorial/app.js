const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

//static assest

app.use(express.static("./methods-public"));

// Parse Form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api/people", people);

//Post method handling
app.use("/login", auth);
// GET method handling

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
