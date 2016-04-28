function StateIntro() {
    this.name = "Intro Screen"    
    this.selected = 0;
    this.options = ['New Game', 'Continue', 'Whistle Round the World'];
    this._options = [];
    
    this.stage = new PIXI.Container();
    this.selector = null;
    
    // clear
    
    var style = {
        font: '25px bold',
        fill: 'white'
    }
    
    var x = 120;
    var y = 150;
    
    for (var n=0; n < this.options.length; n++) {
        var p = new PIXI.Text(this.options[n], style);
        p.x = x;
        p.y = y+n*20;
        this.stage.addChild(p)
        this._options.push(p);
    }
    
    this.selector = new PIXI.Text('>', style);
    this.selector.x = x-20;
    this.stage.addChild(this.selector);
    this.selector.y = 150 + this.selected * 20;
}

StateIntro.prototype = new State();
StateIntro.prototype.constructor = StateIntro;

StateIntro.prototype.update = function() {
    
}

StateIntro.prototype.draw = function(renderer) {

    renderer.render(this.stage);
}

StateIntro.prototype.handleKeys = function(e) {
    var keyDown = 115;
    var keyUp = 119;
    
    console.log(e.which);
    
    this._options[this.selected].tint = 0xFFFFFF;
    
    switch(e.which) {
        case keyDown:
            this.selected++;
            break;
        case keyUp:
            this.selected--;
            break;
        default:
            break;
    }
    
    if (this.selected < 0) this.selected = 0;
    if (this.selected >= this.options.length-1) this.selected = this.options.length-1;
    
    this.selector.y = 150 + this.selected * 20;
    this._options[this.selected].tint = 0xFFFF00;
}

StateIntro.prototype.handleMouse = function(e) {
}