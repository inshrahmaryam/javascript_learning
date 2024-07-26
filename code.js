console.log("hello this is maryam");
console.log("this is our first js code");
name="Inshrah Maryam";
console.log(name);
price="32.4";
// console.log(price);
// // age="20";
// // console.log(age);
// isFollow=false;
// console.log(isFollow); //boolean
// price="twenty seven rupees";
// console.log(price);
// let fullName="azam shah";
// console.log(fullName);
// const age="20";
// console.log(age);
// {
//     let a=5;
//     console.log(a);
// }
// let x=null;
// const student={
//     fullName:"ali khan",
//     age:22,
//     cgpa:2.98,
//     address:"high street",
//     isPass:true,
// };
// console.log(student["age"]);
// const profile={
//     userName:"inshrahmaryammm",
//     isFollow:true,
//     followers:240,
//     following:4,
// };
// console.log(typeof profile["followers"]);
// //arithmetic operators
// let a=8; 
// let b=3;
// console.log("a+b=", a +b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b); //exponenciation:raised to power
// //unary poerator
// a++;
// console.log(a);
// --b;
// // console.log(--b);
// console.log(b--);
// console.log(b);
// //assignment operators
// let z=5;
// let y=2;
// z+=6;
// console.log("z+=6=",z);
// y*=2;
// console.log("y*2=",y);
// //comparison operators : returns boolean value
// console.log("5==2",z==y);
// console.log("5!=2",z!=y);
// console.log("5===2",5===2); //also compares datatypes
// console.log("5!==2", z!==y);
// console.log("5<=2", z<=y);
// console.log("2<=5",y<=z);
// //logical operators
// let o=1;
// let p=2;
// let cond1=o<p;
// let cond2=p===9; 
// console.log("cond1&&cond2=",cond1&&cond2); 
// console.log("cond1||cond1=", cond1||cond2);
// console.log(!o>p);
// //conditional statements
// let number=25;  
// if(number>18){
//     console.log("you can vote");
// }
// if(number<18){
//     console.log("you cannot vote");
// }
// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

// let maanu_age=15;
// if(maanu_age>15){
//     console.log("maanu can attend concert");
    
// } else if(maanu_age==15){
//     console.log(" let maanu attend concert");
// }
// else{
//     console.log("maanu cannot attend concert");
// }
// let standard=12;
// let result =standard>18? " has passed matric" : "has not passed matric";
// console.log(result);
// alert("dont leave once you've entered!");
// let num=prompt("enter a number");
// if(num%5===0){
//     console.log("it is a multiple of 5");
// }
// else{
//     console.log("the number is not a multiple of 5");
// }
// for(let count=1;count<=10;count++){
//     console.log("this is maryam");
// }
// console.log("the loop has ended");
// // let sum=0;
// // for(let i=1;i<=5;i++){
// //     sum=sum+i;
// //     console.log("sum=",sum);
// // }
// // let k=0;
// // while(k<=10){
// //     console.log("k=",k);
// //     k++;
// // }
// // let r=1;
// // do{
// //     console.log("hello i am coding in js");
// //     r++;
// // } while(r<=20);
// // let str="maryam";
// // for(let l of str){
// //     console.log(l);
// // }
// // let teacher={
// //     name:"madiha memon",
// //     age:30,
// //     designation:"associate professor",
// // };
// // for(let y in teacher){
// //     console.log(y);
// //     console.log("key=",y,"value",teacher[y]);
// // } //returns keys
// // let gameNum=25;
// // let userNum=prompt("guess the game number");
// // while(userNum!=gameNum){
// //     console.log("oops! u guessed the wrong no. now guess again");
// // }
// //     console.log("congrats! u entered the right number");
// // let str2="meow guys";
// // console.log(str2.length);
// // let specialString=`this is a template literal`;
// // console.log(specialString);
// // let obj={
// //     item:"pen",
// //     price:100,
// // };
// // let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// // console.log(output);
// // console.log(str2.UpperCase);

// // let str1= prompt("enter your full name");
// // console.log(str1);
// // console.log("generating user name:")
// // console.log("@",str1,str1.length);
// let students=["arshi","ahmed","ali","arslan"];
// console.log(students);
// console.log(students.length);
// for(let idx=0; idx<students.length;idx++){
//     console.log(students[idx]);
// }
// for(let el of students){
//     console.log(el);
// }
// let cities=["mtn","lhr","khi","isb"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }
// let marks=[87,97,44,37,76,60]
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// // for(let i=0;i<marks.length;i++){
// //     sum+=marks[i];
// console.log("sum of the given array is",sum);
// // }
// let avg;
// avg=sum/marks.length;
// console.log("average:",avg)
// let items=[250,645,300,928,908];
// // let id=0;
// // for(let val of items){
// //     console.log(`value at index ${id}=${val}`);
// //     let offer=val/10;
// //     items[id]=items[id]-offer;
// //     console.log(`value after offer=${items[id]}`);
// //     id++;
// // }
// for(let id=0;id<items.length;id++){
//     let offer =items[id]/10;
//     items[id]-=offer;
// }
// console.log(items);
// console.log(items.toString());
// let marvel_heroes=["thor","spiderman","loki","doctorStrange","hulk","blackWidow"];
// let ss=items.concat(marvel_heroes);
// console.log(ss);
// let val=marvel_heroes.unshift("captain_america");
// console.log(val);
// let val2=marvel_heroes.shift("ironman"); //it returns what it deletes
// console.log(val2);
// console.log(marvel_heroes.slice(1,3));
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.splice(2,2,101,102);
// // arr.splice(2,0,101);
// let array=["bloomberg","microsoft","uber","google","ibm","netflix"]
// array.splice(0,1);
// console.log(array);
// array.splice(2,1,"ola");
// console.log(array);
// array.splice(5,0,"amazon");
// function myFunction(){
//     console.log("welcome to maryam's code");
//     console.log("i am writing functions in js");
// }
// myFunction();
// function func(msg){
//     console.log(msg);
// }
// func("hello hello this is an argument");

// function sumfun(x,y){
// sumfun=x+y;
// return sumfun;
// }
// let valll=sumfun(3,4);
// console.log(valll);
// //arrow functions
//  const arrowSum=(a,b)=>{
//     console.log(45+22);
//  }
//  const arrowMul=(a,b)=>{
//     return a*b;
//  };
//  const printHello=()=>{
//     console.log("hello world!");
//  }
//  function function1(str){
//   console.log("a,e,i,o,u")
//  }
//  function1();
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
            count++;
        }   }
        console.log(count);
}
let arrr=[1,2,3,4,5];
arrr.forEach(function printVal(val){
    console.log(val);
})