const express=require("express");
const Student=require("../models/students");
const router=new express.Router();
router.post("/student",async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//Read the data of the registered students:-
router.get("/student",async(req,res)=>{
    try{
        const studentsData=await Student.find();//Returns array of data
        res.send(studentsData);
    }
    catch(e){
        res.send(e);
    }
})

//Read the data of students using id:-
router.get("/student/:id", async(req,res)=>{
    try{
        const _id=req.params.id;//returns an id
        const studentData=await Student.findById({_id});
        if(!studentData){
            return res.status(404).send();
        }
        else{
            return res.send(studentData);
        }
    }
   catch(e){
    res.status(500).send(e);
   }
})

//Update the email through id:-
router.patch("student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudent=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudent);
    }
    catch(err){
        res.status(404).send(err);
    }
})

//delete
router.delete("student/:id",async(req,res)=>{
    try{
        const deleteStudent=await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
           return res.status(400).send();
        } 
        res.send(deleteStudent);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports=router;