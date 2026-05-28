// Application entry point

const express = require("express");
const dotenv = require("dotenv").config({ path: "./.env" });
const app = express();

app.listen(process.env.PORT);
console.log(`Server running on port ${process.env.PORT}`);

app.use(express.static("src/public"));
