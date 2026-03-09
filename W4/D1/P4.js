// logging 
console.log("console logging");

console.warn("Warning message");

console.error("Error message");

let users = [
    {id: 1, name: "Amith"},
    {id: 2, name: "Santhosh"}
];
console.log(users);
console.table(users);

// group related logs
console.group("grouped logs");
console.log("log1");
console.log("log2");
console.log("log3");

// measure execution time
console.time("LoopTimer")
for(let i=0;i<1000;i++){}
console.timeEnd("LoopTimer");