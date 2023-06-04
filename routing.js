const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    res.end("home");
    else if(req.url=='/about')
    res.end("about page");
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("error page");
    }
});
    server.listen(80,"127.0.0.1",()=>{
        console.log("80")
    }); 