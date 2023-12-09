const express = require('express');
const mongoose = require('mongoose');
var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const passport =require("passport");
const User = require("./models/user")
require('dotenv').config();
const app =express();
const port = 8000;

mongoose.connect("mongodb+srv://admin:Wx2vIJGlm9aQQa1S@cluster0.w2flgrw.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then((x)=>{
    console.log("Connected to db")
}).catch((err)=> {
    console.log(err);
});


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// const connectDB = async ()=>{
//     try{
//         const conn = await mongoose.connect()
//     }
// }
app.get('/', (req,res)=>{
    res.send("HW!!!!");
});

app.listen(port, () => {
    console.log("Listening on " + port);
});