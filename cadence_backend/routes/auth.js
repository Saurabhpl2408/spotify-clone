const express = require('express');
const router = express.Router();
const User = require('./../models/user')
router.post("/register", async (req,res)=>{
    const{email, password, firstName, lastName, username} = req.body;
    const user= await User.findOne({email:email});
    if(user){
        return res.
        status('403')
        .json({error:"The user already exists."})
    }
    const hashPassword = bcrypt.hash(password,10);
    const newUserData = {
        email, 
        password:hashPassword, 
        firstName, 
        lastName, 
        username};
    const newUser =await User.create(newUserData);

    const token = getToken(email, newUser);
})