//set up for views:-
const express=require("express");
const app=express();
const path=require("path");

//require hbs
const hbs=require("hbs");

//views-->templatee
console.log(__dirname);
const temp_path=path.join(__dirname,"../templatee/views");
//to set the view engine
app.set("view engine","hbs");
app.set("views",temp_path);

//partials:-
const partial_path=path.join(__dirname,"../templatee/partials");
hbs.registerPartials(partial_path);
app.get("/",(req,res)=>{
    res.render("index",{
        channelName:"vaishnavi"
    })
})
app.listen(8000,()=>{
    console.log("done!");
})