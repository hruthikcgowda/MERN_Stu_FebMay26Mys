// Basic callback variations
// 1.a callback with no input data
// 2.a callback that recives data from main function

function runTask(callback){
    console.log("Task is running.");
    callback();

}
function runTaskWithResult(TaskName,callback){
    console.log("Proccesing task: ",+TaskName);
    callback("Task"+TaskName+"finished execution");
}
function showSimpleDoneMessage(){
    console.log("Simple callback execution");
}
function showDetailedMessage(message){
    console.log(message);
}
runTask(showSimpleDoneMessage);
runTaskWithResult("Send monthly report",showDetailedMessage);