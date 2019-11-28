console.log("Javascript File Loaded");

var items = new Array();
var container = document.getElementById("item-container");
var xDiff, yDiff;
container.onmousedown = function(){
    xDiff = parseFloat(getComputedStyle(container).left) - parseFloat(event.pageX);
    yDiff = parseFloat(getComputedStyle(container).top) - parseFloat(event.pageY);
    console.log("X: " + xDiff + "\tY: " + yDiff);
    document.onmousemove = attachContainer;
};
container.onmouseup = function(){document.onmousemove = null;};



function attachContainer(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    container.style.left = (mouseX + xDiff).toString() + "px";
    container.style.top = (mouseY + yDiff).toString() + "px";
}

function printMouseChoord(event){
    console.log(event.pageX + " " + event.pageY);
}

function toggleColor(){
    console.log("Clicked");
    if(getComputedStyle(container).backgroundColor == "rgb(0, 0, 0)"){
        container.style.backgroundColor = "rgb(255, 0, 0)";
    }else if(getComputedStyle(container).backgroundColor == "rgb(255, 0, 0)"){
        container.style.backgroundColor = "rgb(0, 0, 0)";
    }else {
        container.style.backgroundColor = "rgb(0, 0, 0)";
    }

    var current = parseFloat(getComputedStyle(container).left.split("px")[0]);
    current += 10;
    container.style.left = current.toString() + "px";    
}