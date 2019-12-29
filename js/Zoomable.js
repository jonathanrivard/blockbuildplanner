console.log("Zoomable Module Loaded");

class Zoomable {
    constructor(item){
        item.style.position = "absolute";
        var scale = 1;
        var negitiveScale = false;
        var scaleLimits = [0.1, 5.0];

        document.onwheel = function(event){
            var delta = event.deltaY * -0.02;
            scale = scale + delta;
            if(negitiveScale =! false && scale < 0){
                scale = 0;
            }
            if(scale < scaleLimits[0]){
                scale = scaleLimits[0];
            }else if (scale > scaleLimits[1]){
                scale = scaleLimits[1];
            }
            item.style.transform = "scale(" + scale + ", " + scale + ")";
        }
    }
}