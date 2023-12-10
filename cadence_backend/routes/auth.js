const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const {getToken} = require('./../utils/helpers');
const bcrypt = require('bcrypt');
router.post("/register", async (req,res)=>{
    const{email, password, firstName, lastName, username} = req.body;
    const user= await User.findOne({email:email});
    if(user){
        return res.
        status('403')
        .json({error:"The user already exists."})
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUserData = {
        email, 
        password:hashPassword, 
        firstName, 
        lastName, 
        username};
    const newUser =await User.create(newUserData);
    console.log('New user:', newUserData);

    const token = getToken(email, newUser);
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports = router;