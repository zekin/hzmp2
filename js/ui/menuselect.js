function MenuSelect(options) {
    this.selected = 0;
    this.options = options.items || [];
    this.callbacks = options.callbacks;
    
    this.sprites = [];
    
    this.style = options.style || {
        default: {
            fill: 0xFFFFFF,
            font: '14px sans-serif'
        },
        selected: {
            fill: 0xFFFF00,
            font: '14px sans-serif'
        }
    };
    
    this.optionData = options.data || {
        sx: 24,
        sy: 25,
        height: 15,
    };

    this.arrow = null;
    
    this.container = new PIXI.Container();
    
    var x = options.x || 0;
    var y = options.y || 0;
    this.moveTo(x, y);
}

MenuSelect.prototype.moveTo = function(x, y) {
    this.container.x = x;
    this.container.y = y;
}

MenuSelect.prototype.calculateSize = function() {
    var data = this.optionData;
    var n = this.options.length;
    var width = 0;
    while (n--) {
        var mt = MeasureText(this.options[n], this.style.default.font);
        
        if (mt.width > width) width = mt.width;
    }
    
    width += data.sx * 2;
    
    var height = (data.sy * 2) + this.options.length * data.sy;
    
    return {
        width: width,
        height: height
    }
}

MenuSelect.prototype.initialize = function() {
    // figure out sizes
    var sz = this.calculateSize();
    
    // bg & container setup
    var g = new PIXI.Graphics();
    g.beginFill(0x000000);
    g.drawRect(0, 0, sz.width, sz.height);
    
    this.container.addChild(g);
    
    // text option setup
    var data = this.optionData;
    var style = this.style.default;
    
    for (var n=0; n < this.options.length; n++) {
        var string = this.options[n];
        var s = new PIXI.Text(string, style);
        s.x = data.sx;
        s.y = data.sy + data.sy * n;
        
        this.sprites.push(s);
        this.container.addChild(s);
    }
    
    this.sprites[this.selected].style = this.style.selected;
    
    // arrow setup
    this.arrow = new PIXI.Text('>', style);
    this.arrow.x = data.sx - 14;
    this.arrow.y = data.sy;
    
    this.container.addChild(this.arrow);
}

MenuSelect.prototype.handleInput = function(e) {
    var keyDown = 115;
    var keyUp = 119;
    var keyAccept = 69;
    
    
    var selectedSprite = this.sprites[this.selected];
    selectedSprite.style = this.style.default;
    
    switch(e.which) {
        case keyDown:
            this.selected++;
            break;
        case keyUp:
            this.selected--;
            break;
        case keyAccept:
            this.callbacks[this.selected]();
            return;
        default:
            console.log('MenuSelect: key->' + e.which);
            break;
    }
    
    if (this.selected < 0) this.selected = 0;
    if (this.selected >= this.options.length-1) this.selected = this.options.length-1;
    
    // update selected items
    selectedSprite = this.sprites[this.selected];
    selectedSprite.style = this.style.selected;
    
    this.arrow.y = selectedSprite.y;
}