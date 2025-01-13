/*
 Assignment:
    1. Create a backend server in Node.js, that returns the sum endpoint.
    2. Write a HTML file, that hits the backend server using the "fetch" API.
*/
const express = require("express");

const app = express();

app.use(express.json());

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  res.json({
    answer: a + b,
  });
});

app.listen(3000);
