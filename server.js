const http=require("http");
const server=http.createServer((req,res)=>{
    res.end("My main page.");
})
server.listen(80,"127.0.0.1",()=>{
    console.log("127.0.0.1");
})