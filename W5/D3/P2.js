// why use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"kiran"});
        },1000);
    });
}

function getOrder(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },1200);
    });
}

async function showUserAndOrder(){
    const user = await getUser();
    // console.log("user Loaded: ",user.name);

    const orders =  await getOrder(user.id);
    console.log("Orders loaded",orders);
}

showUserAndOrder();