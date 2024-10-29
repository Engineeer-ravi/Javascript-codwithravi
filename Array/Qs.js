let marks=[98,65,76,37,78,39];
let sum=0;
for(let val  of marks){
   sum+=val;
}
let avg=sum/marks.length;
console.log(`avg marks of the class = ${avg}`);