// innerText & TextContent
// innerText: visible rendered text only
// TextContent: all the text nodes regardless of css
// innerHTML: this allows reading or writing HTML markup inside an element

const message =document.getElementById("message");

document.getElementById("innerTxtBtn").addEventListener("click", function(){
    message.innerText="Updated using innerText";
});

document.getElementById("textContentBtn").addEventListener("click", function(){
    message.textContent="update using text content";
});

document.getElementById("resetBtn").addEventListener("click", function(){
    message.textContent = "Original message";
});

const box = document.getElementById("box")
document.getElementById("innerHTMLBtn").addEventListener("click", function(){
    box.innerHTML = "<strong> Original </strong> Content";
});