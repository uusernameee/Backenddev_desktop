const biodata={
    name:"vaishnavi",
    age:20,
    course:"btech"
}
//1. conevrt to json data.
//2. add it in another file.
//3. read file.
//4. again convert back to js object.
//5. console.log
const jsondata=JSON.stringify(biodata);
const fs=require("fs");
fs.writeFile("biodata.json",jsondata,(err)=>{
    console.log("written");
});
fs.readFile("biodata.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data);
console.log(orgdata);
})
