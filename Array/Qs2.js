let items=[250,678,987,576,356];
let i =0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items [i] = items [i] - offer;
    console.log(`value after offer = ${val}`)
    i++;
}