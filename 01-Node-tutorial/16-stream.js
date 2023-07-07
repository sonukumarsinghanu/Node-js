const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt", "utf8");
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
