const http = require("http");
const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json;charset=utf-8",
  });

  res.write(`Server is running at port : ${PORT}`);

  res.end();
});

server.listen(PORT, () => {
  console.log("Server is listening to yous...");
});
