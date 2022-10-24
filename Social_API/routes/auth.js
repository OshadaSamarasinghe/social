const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { json } = require("express");

// Register
router.post("/register", async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err)
    }
});
// Login
router.post("/login", async(req,res)=>{
    try{
        // check email
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found");
        // check password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).json("Invalid Password");
        // if enter valid email and password
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports = router;