const { readFile, writeFile } = require("fs");

console.log("starting");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const Second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first} , ${Second}`,
      (err, result) => {
        if (err) {
          console.log("write", err);
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("move to next task");
