// function myFunction(){
//     console.log("Welcome to Webdevlopment ");
//     console.log("We are Learning JS")

// }
// myFunction();

// function rFunction(msg){
//     // parameter >>Input
//     console.log(msg)

// }
//  rFunction("i Love Js");  //argument

//function 2 number sum
// function sum(a,b){
//     //local Variable
//     // console.log(a+b)
//     s=a+b;
//     console.log(a+b)
//     return s;
// }
//  let  value =sum(3,5);
//  console.log(a+b);
//  console.log(value);

//  Arrow funnction
// function sum(a,b){
//     return a+b;

// //}
// const arrowSum=(a,b) =>{
//     console.log(a+b);
// };
// //multiplication funcion
// const arrowMul=(a,b) =>{
//     console.log(a*b);

// };



// Methode forEach  loop in Arrays
//forEach=callback Function
// let arr =[1,2,3,4,5,6];
// arr.forEach(function printVal(val){
//     console.log(val);

// });
 let arr =["RAVI", "DELHI" ,"MUMBAI", "CHENAI", "BANGLORE", "GURGAON"];
     arr.forEach((val ,idx,arr)=>{
        console.log(val.toLowerCase() ,idx,arr);
     });