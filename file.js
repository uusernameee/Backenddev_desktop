const fs=require("fs");
//write:-
fs.writeFileSync("read.txt","hello!");
//add:-
fs.appendFileSync("read.txt"," VAISH!");
//read:-
//1. buffer data
const buf_data=fs.readFileSync("read.txt");
org_data=buf_data.toString();
console.log(org_data);
//2. directly original data
const data=fs.readFileSync("read.txt","utf8");
//rename:-
fs.renameSync("read.txt","readd.txt");
//delete:-
fs.unlinkSync("readd.txt");