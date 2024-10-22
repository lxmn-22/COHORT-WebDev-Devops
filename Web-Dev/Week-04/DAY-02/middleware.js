// Middleware: Express is a routing and middleware web framework that has minimal functionality of its own.
// An Express application is essentially a series of middleware function calls.

// Middleware functions are functions that have access to the request object(req), the response object(res) and the next
// middleware function in the application's request-response cycle.

const express = require("express");

const app = express();

// function that returns a boolean if the age of the person is more than 12.
/*
    function isOldEnough(age) {
        if (age >= 12) {
            return true;
        } else {
            return false;
        }
    }
*/

// ticket checker with Middleware.
function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;

  if (age >= 12) {
    // calling the next function, takes the control from one to another middleware.
    next();
  } else {
    res.json({
      msg: "Sorry you are no of age yet.",
    });
  }
}
// new way to use middleware, to use it remove middleware from app.get args, simply.
// app.use(isOldEnoughMiddleware);

// Ride02.
app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 02.",
  });
});

// Ride01.
app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 01.",
  });
});

app.listen(3000);
