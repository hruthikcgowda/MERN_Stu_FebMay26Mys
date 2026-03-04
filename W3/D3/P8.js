// json stringify and parse
const employee = {
    id:100,
    name:"Hruthik",
    dept:"CS",
    isActive: true
};
// convert js to json using stringify
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

// convert json to js using parsed
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);