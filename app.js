const http = require("http");
// My first node app
const server = http.createServer((request, response) => {
  response.end("hello again");
});

server.listen(5000, () => {
  console.log("Can you see me?");
});
