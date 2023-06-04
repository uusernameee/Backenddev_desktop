//SINGLE :-
//const add=require("./oper");
//console.log(add(1,1));

/*MULTIPLE EXPORTS WHEN :-
const oper=require("./oper");
console.log(oper.add(2,3));
console.log(oper.name);

without multiple oper.add and all:-*/
const {add,name}=require("./oper");
console.log(add(3,1));
console.log(name);

