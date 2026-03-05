// /Reduce method
let nums = [5,10,15];

let Average = nums.reduce((intermediatesum,current) => intermediatesum + current,0)/nums.length;
console.log(Average);

// Reduce to object count by category
let items = ["pen","pencil","pen","Eraser"];
let count = items.reduce((initialvalue,item)=>{
    initialvalue[item] =(initialvalue[item] || 0) + 1;
    return initialvalue;
},{});
console.log("Item count:",count);