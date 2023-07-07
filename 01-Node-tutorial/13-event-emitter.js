const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  // on and emit function first parameter must be same
  console.log(`data received by ${name} and his age is ${age}`);
});
customEmitter.on("response", () => {
  // on and emit function first parameter must be same
  console.log(`getting response `);
});

customEmitter.emit("response", "singh", 26); //subscribing the on method
