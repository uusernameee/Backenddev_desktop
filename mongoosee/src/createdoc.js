const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test",{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=>console.log("connection successfull..."))
.catch((err)=>console.log(err));

//Creating schema:-
const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

//Creating model/collection:-
const Playlist=new mongoose.model("Playlist",playlistSchema);

//Creating documents:-1st way
/*const reactPlaylist=new Playlist({
    name:"React JS",
    ctype:"Front end",
    videos:10,
    author:"Thapa",
    active:true,
})

Save:-
reactPlaylist.save();*/

//Another way:-
/*const createDoc=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"Node JS",
            ctype:"Back end",
            videos:20,
            author:"Harry",
            active:true,
        })
        const result=await reactPlaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}*/
//Calling async function:-
//createDoc();

//Inserting many at once using INSERTMANY:-
/*const createDoc=async()=>{
    try{
        const jsPlaylist=new Playlist({
            name:"Javascript",
            ctype:"Back end & Front end",
            videos:30,
            author:"Harry",
            active:true,
        })
        const htmlPlaylist=new Playlist({
            name:"HTML",
            ctype:"Front end",
            videos:40,
            author:"Angela Yu",
            active:true,
        })
        const result=await Playlist.insertMany([jsPlaylist,htmlPlaylist]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
createDoc();*/

//To READ the data:-
/*const read=async()=>{
    const ans1=await Playlist.find({ctype:"Front end"});
    console.log(ans1);
    const ans2=await Playlist.find({ctype:"Front end"}).select({name:1});//name dikhana chahte ho
    console.log(ans2);
}
read();*/

//COMPARISON QUERY OPERATORS:-
/*const read=async()=>{
    const ans=await Playlist.find({ctype:{$in:["Back end" ,"Front end"]}}).select({name:1});
    console.log(ans);
}
read();*/

//LOGICAL QUERY OPERATORS:-
/*const read=async()=>{
    const ans=await Playlist.find({$and:[{ctype:"Front end"},{videos:10}]}).select({name:1});
    console.log(ans);
}
read();*/

//SORT QUERY METHOD:-
/*const read=async()=>{
    const ans=await Playlist.find({ctype:"Front end"}).select({name:1}).sort({name:-1});
    console.log(ans);
}
read();*/

//COUNT QUERY METHOD:-
//count , countDocuments ,estimatedDocumentCount(count all documents)
/*const read=async()=>{
    const ans=await Playlist.find({ctype:"Front end"}).select({name:1}).count();
    console.log(ans);
}
read();*/

//UPDATE QUERY:-using set operator
//1. updateOne (_id=id)
/*const updateDoc=async(_id)=>{
    try{
        const result=await Playlist.updateOne({_id},
            {$set:{
                ctype:"Front End"
            }})
            console.log(result);//kitne doc match hue or update kiya
    }
    catch(err){
        console.log(err);
    }
}*/

//2.findByIdAndUpdate
/*const updateDoc=async(_id)=>{
    try{
        const result=await Playlist.findByIdAndUpdate({_id},{
            $set:{
                ctype:"Front End"
            }
        },{
            new:true,
            useFindAndModify:false
        })
        console.log(result)//gives older output in console. To give new add :- new:true in options.
    }
    catch(err){
        console.loh(err);
    }
}
updateDoc("644bda8127e76a73c54dbb79");*/

//DELETE DOCUMENTS:-deleteOne(count),deleteMany(count),FindByIdAndDelete(deletd document)
const deleteDoc=async(_id)=>{
    try{
        const result = await Playlist.deleteOne({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
deleteDoc("644be005ee7407e3bc4a318a")