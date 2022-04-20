const express=require("express")
const bcrypt = require("bcrypt");
const saltRounds= 10;

const server=express();

server.post("/register", (req,res)=>{
    bcrypt.hash(req.query.password, saltRounds, (err, hashPswd)=>{
        if(err) console.log(err);
        else console.log("PASSWORD :", hashPswd);
})
res.send({
        status:"User registration completed"
    })                                                               
})

server.listen(7001, () => {
    console.log("Application started");
});