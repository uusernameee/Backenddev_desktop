const express=require("express");
const path=require("path");
const app=express();
//to set the view engine
app.set("view engine","hbs");

//change views to templatee
const temp_path=path.join(__dirname,"../express/templatee");
console.log(temp_path);
app.set("views",temp_path);

//template engine route
app.get("/",(req,res)=>{
    res.render("index");
});
app.listen(7000,()=>{
    console.log("hubs done!");
})