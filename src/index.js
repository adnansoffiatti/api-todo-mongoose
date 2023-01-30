const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running...`));