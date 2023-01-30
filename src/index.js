const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/connect");
connectToDatabase();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running...`));
