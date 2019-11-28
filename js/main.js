console.log("Javascript File Loaded");

var items = new Array();
var container = document.getElementById("item-container");
container.onmousedown = toggleColor;

function toggleColor(){
    console.log("Clicked");
    if(getComputedStyle(container).backgroundColor == "rgb(0, 0, 0)"){
        container.style.backgroundColor = "rgb(255, 0, 0)";
    }else if(getComputedStyle(container).backgroundColor == "rgb(255, 0, 0)"){
        container.style.backgroundColor = "rgb(0, 0, 0)";
    }else {
        container.style.backgroundColor = "rgb(0, 0, 0)";
    }
}