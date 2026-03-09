const clickbtn= document.getElementById("clickbtn");
const demoinput = document.getElementById("demoinput");
const runclick= document.getElementById("runclick");
const runmouseover= document.getElementById("runmouseover");
const runkeydown= document.getElementById("runkeydown");
const runduplicate= document.getElementById("runduplicate");
const hoverbox= document.getElementById("hoverbox");

clickbtn.addEventListener("click",function(e){
    console.log(" e type",e.type);
    console.log("instance mouse event", e instanceof MouseEvent);
});

demoinput.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        console.log("Enter key down");
    }
});

runclick.addEventListener("click",function(){
    clickbtn.click();
});

runmouseover.addEventListener("click",function () {
    hoverbox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("Dispatching mouseEvent");
});

hoverbox.addEventListener("mouseover",function(){
    console.log("Progamatically trigeering Mouse hover");
});

runkeydown.addEventListener("click",function(){
    demoinput.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}

    ));
});

runduplicate.addEventListener("click",function(){
    const temp = document.createElement("button");
    temp.textContent ="Click me";
    document.body.appendChild(temp);
});