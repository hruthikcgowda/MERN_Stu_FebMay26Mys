// Callback error
function divideNumbers(a,b,callback){
    if(b==0){
        console.log("Cannot divide by zero.",null)
        return;
    }
    const result = a/b;
    callback(result);
}
divideNumbers(10,2,function(error,result){
    if(error){
        console.log("Error: ",error);
        return;
    }
    console.log("Result: ",result);
});