const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/connect");
connectToDatabase();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserSchema = require("./models/User");
const TodoSchema = require("./models/Todo");
const PORT = process.env.PORT || 3333;

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

app.listen(PORT, () => console.log(`Server running...`));
