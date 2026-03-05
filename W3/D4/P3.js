// array map
let prices = [10,20,30,40];
let pricewithGST = prices.map(price => price + price*0.18);
console.log("price without tax",prices);
console.log("price with tax",pricewithGST);

// Using map to extract files
let users = [
    {name:"Appu", age:48},
    {name:"Hruthik", age:21}
];
// to take individual object
let names = users.map(user => user.name);
console.log(" ",names);