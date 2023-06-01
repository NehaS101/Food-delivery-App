const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserModel} = require('../Models/usermodel');

const UserRouter = express.Router();

//registering a user
UserRouter.post("/register",(req,res)=>{
    const {name,email,password,address}= req.body;
try {
    bcrypt.hash(password,6,async(err,hash)=>{
        const user = new UserModel({
            name,
            email,
            password:hash,
            address
        })
        await user.save();
        res.send({mssg:"user registered successfully",user}).status(201)
    })
} catch (error) {
    res.send(`error while registering: ${error.message}`);
}
})

//loging user
UserRouter.post("/login",async(req, res)=>{
 const {email,password} = req.body;   
 try {
    const user = await UserModel.find({email})
    if(!user){
        res.send("please register first");
    }

    const hashedpwd = user[0].password;

    bcrypt.compare(password,hashedpwd,(err,result)=>{
        if(result){
            const token= jwt.sign({userID:user._id},process.env.key,{expiresIn:3600*24})
        res.send({mssg:"login successfully",token:token}).status(201)
        }else{
            res.send({mssg:"login failed",error:err})
        }
    })
 } catch (error) {
    res.send(`error while logging in: ${error.message}`);
 }
})

//updating password
UserRouter.patch("/user/:id/reset",async(req,res)=>{
    const {oldpass,newpass} = req.body;
    const id = req.params.id;
    try {
       const data= await UserModel.find({"_id":id});
       const password = data[0].password;
       bcrypt.compare(oldpass,password,async(err,result)=>{
        if(result){
            bcrypt.hash(newpass,8,async(err,hash)=>{
                if(err){
                    res.send("not able to reset password")
                }else{
                    await UserModel.findByIdAndUpdate({"_id":id},hash)
                    res.send("user details updated").status(204)
                }
            })
        }
       });
        
      
        
    } catch (error) {
        res.send(`error while resetting password: ${error.message}`);
    }
})
module.exports = {UserRouter};