// mouse events
const hoverBox = document.getElementById("hoverbox");

hoverBox.addEventListener("mouseover",function(){
    hoverBox.textContent = "Mouse is over me";
    hoverBox.style.backgroundColor = "Lightyellow";
});

hoverBox.addEventListener("mouseout",function(){
    hoverBox.textContent = "hover over me";
    hoverBox.style.backgroundColor = "";
});