const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
//console.log(__dirname);
const temp_path=path.join(__dirname,"../templatee/views");
app.set("view engine","hbs");
app.set("views",temp_path);
app.get("/",(req,res)=>{
    res.render("home",{
        homepage:"this is a home page."
    });
})
app.get("/contact",(req,res)=>{
    res.render("contact",{
        contactpage:"this is a contact page."
    });
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"oops!!! page not found."
    });
});
app.listen(80,()=>{
    console.log("done!");
})
