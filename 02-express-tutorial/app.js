const express = require("express");
const app = express();
const { people } = require("./data");
//static assest

app.use(express.static("./methods-public"));

// Parse Form data
app.use(express.urlencoded({ extended: false }));

// GET method handling
app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});

//Post method handling
app.post("/login", (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Name");
});

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
