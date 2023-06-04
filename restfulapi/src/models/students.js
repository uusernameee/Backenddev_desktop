const mongoose=require("mongoose");
const validator=require("validator");

//Creating Schema:-
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        require:true,
        unique:[true,"Email id already present."],
        //Adding validator:-
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true,
    },
    address:{
        type:String,
        required:true
    }
})

//Defining Model:-
const Student=new mongoose.model("Student",studentSchema);
module.exports=Student;