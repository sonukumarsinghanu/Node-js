//access file module
//we can also write cosnt readFileSync = require('fs)

const { readFileSync, writeFileSync, write } = require("fs");

// Read data from file
console.log("starting ");
const first = readFileSync("./content/first.txt", "utf-8"); //check the meaning of utf-8
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

//write using file system in node

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first},${second}`,
  { flag: "a" } // it will overwrite the value again
);
console.log("Done with this task");
console.log("Move to Next task");
