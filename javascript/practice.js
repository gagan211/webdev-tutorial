// const a1=6;
//  a1=a1+1;//{ this is not allowed as we have declare a1 as constant and this cannot be changed}
// console.log(a1)

// here the let option is only for the brackets and not for the whole progrqam while "var" is used to re-declare the element in the bracket and it becomes global 
{
    // this a is called a "block" level element with its scope limited only to these brackets
    let a=66;
    // var a=66;
    console.log(a)
}
// DATATYPES:-
// null- it is used when there is no value at all. It acts like an empty

let x="harry bhai";
let y=22;
let z=3.567;
const p = true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r); 
// the "typeof(Null) is always "OBJECT"  and this is because that from a long time it is been like this and this cannot be changed

// OBJECTS:-
let o ={
    "name":"harry",
    "job":"developer",
    "class":"4th sem",
    "age":20,
    "is_handsome":true
}
o.saalry="100cr"
console.log(o);

// CONDITIONAL STATEMENTS:-

let age=45;
let grace=42;
if(age-grace<18){
    console.log("You can drive");
}
else if(age==67){
console.log("you no");
}
else{
    console.log("you cant drive");
}

// for (let i = 0; i < 100; i++) {
// console.log(i);    
// }

for (const key in o) {
    const el=o[key];
    console.log(key,el);
}

const funt=(x) =>{
    console.log("i am arrow function"+x);
}
funt(1);
funt(64);

// STRNGS

let a = "gagan"
console.log(a[2])

console.log((`his name is ${a}`));

arr=[1,2,4,5,10]
arr.pop()
arr.shift()
b=arr.join("")
// console.log(b);
// arr.unshift()
console.log(arr);
console.log(object);

//factorial code
function fact(numberf){
if(numberf==0 || numberf==1){
    return 1
}
else{
    return (n * fact(n-1))
}
}
console.log(fact(5));