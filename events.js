const EventEmitter=require("events");
const event=new EventEmitter();
//Events
event.on("sayMyName",()=>{
    console.log("Vaishnavi Gupta")
})
event.emit("sayMyName");

//Cna run multiple events:-
event.on("print",()=>{
    console.log("hello world");
})
event.on("print",()=>{
    console.log("hello guys");
})
event.emit("print");

//Can take parameters also
event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and message is ${msg}`);
})
event.emit("checkPage",200,"ok");
