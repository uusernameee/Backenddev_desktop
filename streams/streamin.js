//Reading using fs module:-
/*const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    fs.readFile("input.txt",(err,data)=>{
        if(err)
        return console.error(err);
        res.end(data.toString());
    });
});
server.listen(80,"127.0.0.1");*/

//Using stream:-
const http=require("http");
const fs=require("fs");
const server=http.createServer();
server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("streams/input.txt");
  /*  rstream.on("data",(chunkdata)=>{//chunkdata me read kara hua data store ho jayega. 
        res.write(chunkdata);
    })
    rstream.on("end",()=>{//printing that chunkdata.
        res.end();
    })
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("file not found");
    })*/
    
    //Using pipe method:-
    rstream.pipe(res);
})
server.listen(80,"127.0.0.1");
