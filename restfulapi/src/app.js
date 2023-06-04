const express=require("express");
const app=express();
const port=process.env.PORT|3000;
const studentRouter=require("./routers/student");
//express.json:-
app.use(express.json());
app.use(studentRouter);

require("./db/conn");
const Student=require("./models/students");

//router
//app.use(router);
/*app.post("/student",(req,res)=>{
    console.log(req.body);
    //Postman me data likha hai ab us data ko fetch krne ke liye .ie. database me add krne ke liye:-
    const user=new Student(req.body);//waise hum () andar data define krte the
    //data ko mongodb me save krna :-
   user.save().then(()=>{
        res.status(201).send(user);
    }).catch((error)=>{
        res.status(400).send(error);
    })
  //  res.send("This is a registration page.");
})*/


app.listen(port,()=>{
    console.log("connection successful");
})