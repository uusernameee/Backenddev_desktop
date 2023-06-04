const express=require("express");
const app=express();
app.get("/about",(req,res)=>{
    res.write("<h1>welcome to about page.</h1>");
    res.write("<h1>hello</h1>");//write likhta chala jata hai
    res.send();//to terminate write
})

//Display json data:-
//1st way:-
app.get("/json1",(req,res)=>{
    res.send({
        id:1,
        name:"vaishnavi",
        course:"btech"
    });
}); 
//2nd way:-
app.get("/json2",(req,res)=>{
    res.json([
        {
            id1:1
        },
        {
            id1:2
        }
    ])
})
app.listen(8000,()=>{
    console.log("sended");
})