// Object Iteration
const book = {
    title: "JS for newbies",
    author:"___",
    year: 2026
};

for(let keys in book){
    // console.log(key,":",book[key]);
}
console.log("Keys:",Object.keys(book)); //keys
console.log("Values:",Object.values(book)); //values
console.log("entries:",Object.entries(book)); //entries