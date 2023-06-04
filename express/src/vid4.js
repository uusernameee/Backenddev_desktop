const express=require("express");
const path=require("path");
const app=express();
const static_path=path.join(__dirname,"../public");
console.log(static_path);  
app.use(express.static(static_path));
app.listen(80,()=>{
    console.log("vid4");
})