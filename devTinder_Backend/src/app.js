//Starting point of the application
console.log("Starting the application...");
const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// app.use(bodyParser.json());
// app.use(cors());


app.use("/hello", (req, res) => {
    res.send("This is a test route.");
});


app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({firstName: 'Sanju', lastName: 'Balakrishnan'});
})
app.use("/index", (req, res, next) => {
    res.send("Hello, World!");
});

app.get("/user", (req, res, next) => {
    res.send({firstName: 'Sanju', lastName: 'Balakrishnan'});
});

app.post("/user", (req, res, next) => {
    res.send('Data Successfully saved to the database');
});

app.delete("/user", (req, res, next) => {
    res.send('Data Successfully delete to the database');
});

app.use('/routeHandle', (req, res, next) => {
 // Route Handler 1 and 
   next();
  res.send('Route Handler1');
}, (req, res) => {
// Multiple Route Handler 2
 res.send('Route Handler2');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});