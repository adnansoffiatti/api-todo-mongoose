const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    description: String,
    done: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = TodoSchema;