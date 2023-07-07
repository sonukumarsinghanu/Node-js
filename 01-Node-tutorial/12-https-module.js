// HTTP module (built in module)

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to Home Page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our rest story");
    return;
  }
  res.end(`
  <h1>OOPS !</h1>
  <p>We can't seem to find the page</p>
  <a href='/'>Back Home</a>
  `);
});

server.listen(5000);
