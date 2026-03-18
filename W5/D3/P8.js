// try catch finally with async/await 

function processpayment(isSucceeded){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            if(isSucceeded){
                resolve("Payment processed successfully")
            } else{
                reject("Payment couldn't processed successfully")
            }
        },1000);
    });
}

async function runPaymentFlow(isSucceeded){
    try{
        const result = await processpayment(isSucceeded);
        console.log("Success",result);
    }
    catch(error){
        console.log("failure",error);
    }
    finally{
    console.log("Payment flow completed.");
    }
}

runPaymentFlow(false).then(function(){
    return runPaymentFlow(true);
});