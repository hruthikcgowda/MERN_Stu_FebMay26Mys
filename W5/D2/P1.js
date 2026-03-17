// introduction to callback functions
function greetUser(name,callback){
    console.log("Hello,"+name);
    // callback function is executed only after the execution of the current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}
greetUser("Ranjith",showCompletionMessage);