// introduction to async/await
function getMessage(){
    return new Promise(function(yes){
        setTimeout(()=>{
            yes("Async/await makes promise based code easier to read");
        },1000);
    });
}

async function showMessage(){
    console.log("Loading Message...");
    const message = await getMessage();
    console.log(message);
}

showMessage();