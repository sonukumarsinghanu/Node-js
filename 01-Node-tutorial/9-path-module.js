const path = require("path");

console.log(path.sep);

// used to makea a path of that folder

const filePath = path.join("/content", "/subFolder", "test.txt");

console.log(filePath);

// how can you know which file is available on that file

const base = path.basename(filePath);
console.log(base);

//find absolute path

const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");

console.log(absolute);
