function loadImage(src, callback) {
    var img = new Image();
    
    img.onload = function() {
        img.ready = true;
        if (callback) callback(img);
    }
    
    img.src = path;
    return img;
}

// callback allows for shit liek loadImage(path/to/whatever, function(img) {
    // do this shit as soon as it's loaded
//})

var MTCanvas = document.createElement('canvas');
function MeasureText(string, font) {
    var ctx = MTCanvas.getContext('2d');
    ctx.font = font;
    return ctx.measureText(string);
}