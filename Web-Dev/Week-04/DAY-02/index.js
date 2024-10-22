const express = require('express');

// created a hospital.
let app = express();

// returning route.
app.get("/", function (req, res) {
    res.send("Hi, Express!");
})

// assign room to the doctor for patient to visit.
app.listen(3000); 