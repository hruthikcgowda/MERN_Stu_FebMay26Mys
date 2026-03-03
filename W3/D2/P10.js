// Callback Function
// Is a function which is passed as an arguments
// to another function

function greetUser(name, callback) {
    console.log("Hello, ",name);
    callback();
}
greetUser("Hruthik",function(){
    console.log("Callback function executed");
});