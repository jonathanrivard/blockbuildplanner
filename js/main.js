console.log("Javascript File Loaded");
var items = new Array();
var container = document.getElementById("item-container");
var test = document.getElementById("test");

//Make divs dragable
new DragAndDrop(container);
new DragAndDrop(test);