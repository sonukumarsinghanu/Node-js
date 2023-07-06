// npm i package name  - use it in this project only

// npm i -g package name - use it any project

const loda = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = loda.flattenDeep(items);

console.log(newItems);
