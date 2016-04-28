
function State() {
   this.name = 'DefaultState'
   this.keyState = [];
   this.mouseState = {
       x: 0,
       y: 0,
       mouseDown: false
   };
}

State.prototype.update = function() {}

State.prototype.draw = function(renderer) {}

State.prototype.handleInput = function(e) {
    switch(e.type) {
        case "keydown":
            this.keyState[e.which] = true;
            this.handleKeys(e);
            break;
            
        case "keyup":
            this.keyState[e.which] = false;
            this.handleKeys(e);
            break;
            
        case "keypress":
            this.handleKeys(e);
            break;
            
        case "mousedown":
        case "mouseup":
        case "mousemove":
            this.handleMouse(e);
            break;
            
        default:
            // too spammy 
            //console.log('Unknown input', e);
    }
}

State.prototype.handleKeys = function(e) {}
State.prototype.handleMouse = function(e) {}