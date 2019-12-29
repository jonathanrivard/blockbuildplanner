console.log("main.js File Loaded");
var items = new Array();
var container = document.getElementById("main-container");
var itemContainer = document.getElementById("item-container");

//Create Body zoom and drag move
new Zoomable(container);
new Dragable(container);

//Center the inital container
centerContainer();


//Functions
//Center the main container on the screen
function centerContainer(){
    //Get width/height of window and container
    var totalWidth = window.innerWidth;
    var totalHeight = window.innerHeight;
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    //Find the diff in width/height
    var width = totalWidth - containerWidth;
    var height = totalHeight - containerHeight;

    //Center the container using that difference
    container.style.left = width/2 + "px";
    container.style.top = height/2 + "px";

    //Stay on top of container
    if (totalHeight < containerHeight) {
        container.style.top = 100 + "px";
    }
}

//Refresh and create items based on passed width and height
function createItems(w, h){
    //Remove all items from the item container
    for(var i = 0; i < items.length; i++){
        items[i].parentElement.removeChild(items[i]);
    }

    //Clear the item object
    items = new Array();

    //Set the item container grid template for the correct amount of columns
    //Get string of 1fr per column
    var temp = "";
    for(var i = 0; i < w; i++){
        temp += "1fr ";
    }
    //Set columns property to 1fr per column
    itemContainer.style.gridTemplateColumns = temp;

    //Create new items based on paramenters
    for(var i = 0; i < w * h; i++){
        var newItem = document.createElement("div");
        newItem.className = "item";
        itemContainer.appendChild(newItem);
        items.push(newItem);
    }

    //Center the container
    centerContainer();
}

function refreshItemContainer(){
    var width = document.getElementById("widthInput").value;
    var height = document.getElementById("heightInput").value;
    console.log(width);
    createItems(parseFloat(width), parseFloat(height));
}