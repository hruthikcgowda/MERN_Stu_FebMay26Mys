// Default parameters
function product (a,b=2){ //b=2 is default value
    return a*b;
}
console.log("product of 15 and 4:",product(15,4));
console.log("product of 15:",product(15));

// Rest parameters

function sumOfAll(...numbers){
    console.log(...numbers);
}
sumOfAll(1,2,3);
sumOfAll(10);