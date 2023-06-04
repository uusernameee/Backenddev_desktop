const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student-api",{useNewUrlParser:true,useUnifiedTopology:true,})
.then( ()=>console.log("connection successfull..."))//if connection is established.
.catch((err)=>console.log(err));//if connection is not established.