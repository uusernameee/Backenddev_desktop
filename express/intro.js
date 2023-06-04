const express=require("express");
const app=express();//by requiring it gives us an express fuction which helps us to build applications.
//now app has all the methods and properties.

//TASK:- whenever we visit home page it says "thanks for visiting homepage".(Routing)
app.get("/",(req,res)=>{
    res.send("Thanks for visiting homepage.");
});
app.get("/about",(req,res)=>{
    res.send("Thanks for visiting about page.");
});
app.listen(8000,()=>{
    console.log("listening at port 8000");
});