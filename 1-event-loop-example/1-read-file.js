// npm i package name  - use it in this project only

// npm i -g package name - use it any project

const { readFile } = require("fs");

console.log("starting task");

readFile("./content/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  console.log("completed first task");
});

console.log("move to next task");
