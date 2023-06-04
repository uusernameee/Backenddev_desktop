//ROUTING
const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("welcome to my home page.");
})
app.get("/about",(req,res)=>{
    res.send("welcome to my about page.");
})
app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to my contact page.");
})
app.listen(8000,()=>{
    console.log("done!!");
})