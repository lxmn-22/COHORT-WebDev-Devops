const jwt = require("jsonwebtoken");

// decode, verify, generate.

const value = {
    name: "Laxman",
    accountNumber: 1234567891
}

// JWT: use "sign" instead "generate" method.
// const token = jwt.generate(value, "secret");
const token = jwt.sign(value, "secret");
console.log(token);

// This token has been generated using this secret, and hence this token can only be verified using this secret.

// This is equivalent to cheque-book.
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF4bWFuIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5MSwiaWF0IjoxNzI3MDA3MDA1fQ.Ur14v4p3Rf5OnpttO35u_FlG25kIU7ZkfsvUM67BNJ4

const token1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTGF4bWFuIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5MSwiaWF0IjoxNzI3MDA3MDA1fQ.Ur14v4p3Rf5OnpttO35u_FlG25kIU7ZkfsvUM67BNJ4", "secret");
console.log(token1);
