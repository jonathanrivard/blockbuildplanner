console.log("Dragable Module Loaded");

//Drag and Drop Class
//Created by Jonathan Rivard
// https://jonathanrivard.github.io/
// 11/28/19
//By creating this class and passing in a item, that item will become drag and drop

class Dragable {
    constructor(item){
        item.style.position = "absolute"; //Set item's position to absolute
        
        //Set the item's onmousedown function
        item.onmousedown = function(event){
            //Get the difference on the x and y axis from the origin of the item and the current mouse position
            this._diffX = parseFloat(getComputedStyle(item).left.split("px")[0]) - event.pageX;
            this._diffY = parseFloat(getComputedStyle(item).top.split("px")[0]) - event.pageY;
            //Save the differences to local variables to be passed as values below
            var x = this._diffX;
            var y = this._diffY;
            //OnMouseDown set the document's onmousemove function to drag the item
            document.onmousemove = function(e){
                //Get the current mouse positions
                var mouseX = e.pageX;
                var mouseY = e.pageY;
                //Set the item's position to use the mouse, adjusted for the difference between the mouse and item origin
                item.style.left = (mouseX + x).toString() + "px";
                item.style.top = (mouseY + y).toString() + "px";
            }
        }

        //Set the item's onmouseup function
        //When the mouse is released, release the document's mousemove back to null
        item.onmouseup = function(){
            document.onmousemove = null; //Essentially, drop the item
        }
    }
}