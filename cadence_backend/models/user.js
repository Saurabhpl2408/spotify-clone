const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", User);

module.exports = userModel;