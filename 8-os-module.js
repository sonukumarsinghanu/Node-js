//OS module   built in module
const os = require("os");

//info aboiut current user

const user = os.userInfo();
console.log(user);

//method return the systme uptime in seconds
console.log(`the System uptime is ${os.uptime() / 60} minute`);

const currentOS = {
  nmae: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
