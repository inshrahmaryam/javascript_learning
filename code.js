console.log("hello this is maryam");
console.log("this is our first js code");
name="Inshrah Maryam";
console.log(name);
price="32.4";
console.log(price);
// age="20";
// console.log(age);
isFollow=false;
console.log(isFollow); //boolean
price="twenty seven rupees";
console.log(price);
let fullName="azam shah";
console.log(fullName);
const age="20";
console.log(age);
{
    let a=5;
    console.log(a);
}
let x=null;
const student={
    fullName:"ali khan",
    age:22,
    cgpa:2.98,
    address:"high street",
    isPass:true,
};
console.log(student["age"]);
const profile={
    userName:"inshrahmaryammm",
    isFollow:true,
    followers:240,
    following:4,
};
console.log(typeof profile["followers"]);
//arithmetic operators
let a=8; 
let b=3;
console.log("a+b=", a +b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b); //exponenciation:raised to power
//unary poerator
a++;
console.log(a);
--b;
// console.log(--b);
console.log(b--);
console.log(b);
//assignment operators
let z=5;
let y=2;
z+=6;
console.log("z+=6=",z);
y*=2;
console.log("y*2=",y);
//comparison operators : returns boolean value
console.log("5==2",z==y);
console.log("5!=2",z!=y);
console.log("5===2",5===2); //also compares datatypes
console.log("5!==2", z!==y);
console.log("5<=2", z<=y);
console.log("2<=5",y<=z);
//logical operators
let o=1;
let p=2;
let cond1=o<p;
let cond2=p===9; 
console.log("cond1&&cond2=",cond1&&cond2); 
console.log("cond1||cond1=", cond1||cond2);
console.log(!o>p);
