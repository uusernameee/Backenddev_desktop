const express=require("express");
const app=express();
const path= require("path");
const hbs=require("hbs");
//console.log(__dirname);
const temp_path=path.join(__dirname,"../express/templatee/views");
app.set("view engine","hbs");
app.set("views",temp_path);
app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/about",(req,res)=>{
    res.render("about",{
        name:req.query.name,
        age:req.query.age
    })
})
app.listen(80,()=>{
    console.log("done!");
})