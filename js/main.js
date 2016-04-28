
window.onload = function() {
    var g = new Game();
}

function Game() {
    var _this = this;
    
    this.stateStack = [];
    this.currentState = null;
    
    this.renderer = null;
    
    this.updateInterval = null;
    
    this.swapState = function(state) {
        var oldState = this.stateStack.pop();
        this.stateStack.push(state);
        this.currentState = state;
    }
    
    this.pushState = function(state) {
        this.stateStack.push(state);
        this.currentState = this.stateStack[this.stateStack.length-1];
    }
    
    this.popState = function() {
        var ret = this.stateStack.pop();
        this.currentState = this.stateStack[this.stateStack.length-1];
        
        return ret;
    }
    
    this.init = function() {
        // init pixi
        this.renderer = new PIXI.autoDetectRenderer(540, 380, {backgroundColor : 0x22222F});
        document.body.appendChild(this.renderer.view);
        
        // init keybinds
        var handleInput = this.handleInput.bind(this);
        var handleResize = this.handleResize.bind(this);
        
        window.onkeydown = handleInput;
        window.onkeyup = handleInput;
        window.onkeypress = handleInput;
        window.onmousedown = handleInput;
        window.onmouseup = handleInput;
        window.onclick = handleInput;
        window.onmousemove = handleInput;
        
        // init window binds
        window.onresize = handleResize;
        
        // init game
        this.pushState(new StateGame());
        
        // setup loop
        // update 3x a sec
        this.updateInterval = window.setInterval(this.update.bind(this), 1000/30);
        
        // trigger draw loop
        this.redraw();
        this.handleResize();
    }
    
    this.handleInput = function(e) {
        if (this.currentState) this.currentState.handleInput(e);
        
    }
    
    this.handleResize = function(e) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        this.renderer.view.style.width = width + 'px';
        this.renderer.view.style.height = height + 'px';       
        this.renderer.resize(width,height);
    }
    
    this.update = function() {
        this.currentState.update();
    }
    
    this.redraw = function() {
        this.lastFrame = Date.now();
        this.currentState.draw(this.renderer); 
        
        // recheck next frame as well
        window.requestAnimationFrame(this.redraw.bind(this));
    }
    
    this.init();
};