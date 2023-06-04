const mongoose=require("mongoose");//requring mongoose in application and storing it
//with the help of this mongoose we got many properties and methods that we can use to connect..
//my node and express applications with local database by method CONNECT.

//Connect method takes the path of the local database ie. where it is stored , test:- name of database(if not present creates one)
//This returns a promise. Promise:- will hold output and will tell in future at correct time.
//else things:- to handle duplication errors.
mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=>console.log("connection successfull..."))//if connection is established.
.catch((err)=>console.log(err));//if connection is not established.