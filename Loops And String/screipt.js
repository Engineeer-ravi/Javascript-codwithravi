// for(count=1; count<=5; count++){
//     console.log("Ravi Pathak");
// }
// console.log("loop ha ended")




// Print 1 to 5
// for(let i=1; i<=5; i++){
//     console.log("i= ",i);
// }


// CALCULATE SM OF 1 TO 5
// let sum=0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;//1+2+3+4+5=15
// }
// console.log("sum= ",sum);


//while loop
//print 1 to 5
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

//print Ravi Pathak

// let i=1;
// while(i<=10){
//     console.log("Ravi pathak");
//     i++;
// }


//Do while Loop
// let i=1;
// do{
//     // console.log("i=",i);
//     console.log("Ravi patak")
//     i++;
// }while(i<=5);

//For-of Loop

// let str="RaviPathak";
// let size=0;
// for(let i of str){//iterator --> charcters
//     console.log("i=",i);
//     size++;
// }
// console.log("string size=",size);//10


//For-in-Loop
// for(let key in objVar){
//}

let student ={
    Name:"Ravi kumar",
    Age:20,
    cgpa:7.5,
    isPass:true
};
for(let key in student){
    console.log("key=",key,"value=", student[key]);
}

