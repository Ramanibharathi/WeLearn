const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: String,
    emailID: String,
    password: String,
    mobile: String
});


module.exports = mongoose.model("User", userSchema);