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

app.use("/index", (req, res, next) => {
    res.send("Hello, World!");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});