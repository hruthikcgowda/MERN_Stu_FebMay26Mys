// chaining promises with centralized error handling
function validatelogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login validation");
        },400);
    });
}  
function fetchAccountdata(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound = true;
            if(accountFound){
                resolve("Account data loaded.");
            }else{
                reject("Account data could not be found");
            }
        },700);
    });
}
validatelogin()
.then(function(message){
    console.log(message);
    return fetchAccountdata();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("Chain error:",error);
});