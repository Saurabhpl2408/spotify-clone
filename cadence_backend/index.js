const express = require('express');
const mongoose = require('mongoose');
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