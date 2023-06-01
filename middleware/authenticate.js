const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticate =(req,res,next) => {
const token = req.headers.authorization

if(!token) {
res.send("login again")
}
jwt.verify(token,process.env.key,(err,decode)=>{
    if(err){
        res.send("please login again")
    }else{
        next();
    }
})
}
module.exports={authenticate}