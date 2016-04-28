
function StateGame() {
    this.name = 'Game';
    this.mapData = {
        width: 42,
        height: 52,
        tileData: [
2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
2,5,5,5,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
2,5,1,1,1,1,5,1,1,1,1,1,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
2,5,1,1,1,1,1,1,1,1,1,1,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
2,5,1,1,1,1,5,1,1,1,1,1,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,2,2,5,5,
2,5,5,6,5,5,5,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,2,2,5,5,
2,2,2,4,6,6,6,6,6,6,6,6,6,6,6,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,5,2,2,2,2,2,2,5,
2,4,4,4,4,4,4,2,2,2,2,2,2,2,2,6,6,6,2,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,2,2,2,2,2,2,2,2,
4,4,3,3,3,4,4,4,2,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,2,2,2,5,5,5,5,2,2,2,2,6,6,6,6,
3,3,3,3,3,3,3,4,4,2,2,4,4,4,2,2,2,2,2,6,2,2,2,2,2,2,2,2,2,2,5,5,5,2,6,6,6,6,2,2,2,2,
3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,2,2,6,2,2,2,2,2,2,2,2,2,2,6,6,6,2,2,2,2,2,2,2,2,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,2,2,6,6,6,6,6,6,6,6,6,6,5,5,2,2,2,2,2,2,2,2,2,
3,3,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,2,2,2,2,2,2,2,2,
3,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,2,2,5,5,5,5,
3,3,2,2,3,3,3,3,3,3,3,3,3,3,3,4,2,2,2,2,2,2,6,4,4,4,4,4,5,5,5,3,3,3,3,5,5,5,3,3,3,3,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,6,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,
3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,3,3,3,3,3,3,4,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,3,3,3,3,4,6,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,3,4,4,4,2,2,2,2,4,4,4,4,2,6,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,3,4,4,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,3,4,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,3,4,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,3,3,3,4,4,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,3,3,3,3,3,4,4,4,4,2,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
4,5,2,4,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,2,2,2,2,6,6,6,2,2,2,2,2,2,2,2,2,6,6,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,
6,6,6,6,6,6,6,6,5,5,6,6,6,6,6,6,6,6,6,2,6,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,5,5,2,2,3,2,3,2,2,2,2,6,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,2,2,3,3,3,3,2,2,2,2,2,6,2,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,2,3,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,5,5,3,3,3,2,3,2,2,2,2,6,2,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,5,5,3,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,3,3,5,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,5,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,3,5,5,5,5,5,5,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,3,5,5,5,5,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,3,5,5,5,5,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,3,3,5,5,5,5,5,5,5,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,3,5,5,5,5,5,5,5,2,2,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,3,5,5,5,5,5,5,5,2,2,2,2,2,2,2,6,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,3,3,5,5,5,5,5,5,2,2,2,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,3,3,5,5,5,5,5,5,5,5,2,2,2,5,5,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,5,5,5,2,5,5,5,5,5,2,2,5,5,5,5,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
3,5,5,2,2,2,2,2,2,2,2,5,5,5,5,5,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,2,2,2,2,2,2,5,2,2,5,5,5,5,2,2,2,2,2,6,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,2,2,2,2,2,2,5,5,5,5,5,5,5,5,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,2,2,2,2,2,5,5,5,5,5,5,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,2,2,2,2,5,5,5,5,5,5,5,5,2,2,2,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,2,2,2,6,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,2,2,6,2,2,2,2,2,2,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
]
    }
    
    this.units = [new PIXI.Sprite.fromImage('./res/unit/Sprite-0001.png'),
                  new PIXI.Sprite.fromImage('./res/unit/Sprite-0002.png')
    ];
    
    this.turn = 0;
    this.units[0].isPlayerUnit = true;
    this.turnList = [this.units[0], this.units[1]];
    this.playerTurn = false;
    
    this.cutsceneRunning = false;
    this.paused = false;
    
    this.stage = new PIXI.Container();
    this.field = new PIXI.Container();
    this.UI = new PIXI.Container();
    this.activeUI = null;
    
    this.stage.addChild(this.field);
    this.stage.addChild(this.UI);
    
    this.loader = new PIXI.loaders.Loader();
    this.loader.add('tilesheet','./res/tiles/sheet.png');
    this.loader.once('complete', this.bufferMap.bind(this));
    this.loader.load();
    
    this.camera = { 
        target: { x: 0, y: 0 },
        focus: null,
        pos: { x: 0, y: 0 },
        speed: 0.15,
        limit: { x: 0, y: 0 },
        clamp: function(x, y) {
            this.limit.x = x;
            this.limit.y = y;
        },
        watch: function(sprite) {
            this.focus = sprite.position;
        },
        fixLimit: function(x, y) {
            var _lx = this.limit.x - window.innerWidth;
            var _ly = this.limit.y - window.innerHeight;
            
            if (x > 0) x = 0;
            if (y > 0) y = 0;
            if (x < -_lx) x = -_lx;
            if (y < -_ly) y = -_ly;
            
            return {x: x, y: y}
        },
        translate: function() {
            var x, y;
            
            if (this.focus != null) {
                var _x = -this.focus.x + window.innerWidth / 2|0;
                var _y = -this.focus.y + window.innerHeight / 2|0;
                var p = this.fixLimit(_x, _y);
                x = (p.x - this.pos.x) * this.speed;
                y = (p.y - this.pos.y) * this.speed;
            } else {
                var p = this.fixLimit(this.target.x, this.target.y);
                
                x = (p.x - this.pos.x) * this.speed;
                y = (p.y - this.pos.y) * this.speed;
            }
            
            this.pos.x += x;
            this.pos.y += y;
        }
    }
    
    this.mapBuffer = document.createElement('canvas');
    this.mapBufferCtx = this.mapBuffer.getContext('2d');
    this.map = null;
    
    this.pivot = { x: 0, y: 0, active: false };
}

StateGame.prototype = new State();
StateGame.prototype.constructor = StateGame;

StateGame.prototype.bufferMap = function() {
    var texture = PIXI.utils.TextureCache['./res/tiles/sheet.png'];
    
    var ctx = this.mapBufferCtx;
                 
    var w = this.mapData.width;
    var h = this.mapData.height;
    
    this.mapBuffer.width = w * 32;
    this.mapBuffer.height = h * 32;
    
    for (var n = 0; n < this.mapData.tileData.length; n++) {
        var d = this.mapData.tileData[n];
        var y = (n / w) | 0;
        var x = n % w;
        
        ctx.drawImage(texture.baseTexture.source, (d-1)*32, 0, 32, 32, 32*x, 32*y, 32, 32);
    }
    
    this.map = new PIXI.Sprite(PIXI.Texture.fromCanvas(this.mapBuffer));
    this.field.addChild(this.map);
    
    this.camera.clamp(this.map.width, this.map.height);
    
    // test units
    var mage = this.units[0];
    var x = 5;
    var y = 7;
    mage.x = x * 32;
    mage.y = y * 32;
    
    mage.anchor.y = 1;
    
    this.field.addChild(mage);
    
    var b = this.units[1];
    x = 25;
    y = 23;
    b.x = x * 32;
    b.y = y * 32;
    
    b.anchor.y = 1;
    
    this.field.addChild(b);
}

StateGame.prototype.endTurn = function() {
    if (this.nmei) {
        clearInterval(this.nmei);
        this.nmei = null;
    }
    
    if (this.activeUI) {
        this.UI.removeChild(this.activeUI.container);
        this.activeUI = null;
    }
    
    this.turn++;
    if (this.turn >= this.turnList.length) this.turn = 0;
    
    // ??? change when we get some sort of standard I guess????
    this.playerTurn = this.turnList[this.turn].isPlayerUnit;
    this.camera.watch(this.turnList[this.turn]);
    console.log(this.camera.focus);
    
    if (this.playerTurn) {
        var m = new MenuSelect({
            items: ['Attack', 'Move', 'End Turn'],
            callbacks: [this.endTurn.bind(this), this.endTurn.bind(this), this.endTurn.bind(this)]
        });
        m.initialize();
        
        this.activeUI = m;
        this.UI.addChild(m.container);
    }
}

StateGame.prototype.draw = function(renderer) {
    var keyDown = 83;
    var keyUp = 87;
    var keyLeft = 65;
    var keyRight = 68;
    var step = 10;
    
    if (this.keyState[keyDown]) this.camera.target.y -= step;   
    if (this.keyState[keyUp]) this.camera.target.y += step;  
    if (this.keyState[keyLeft]) this.camera.target.x += step;     
    if (this.keyState[keyRight]) this.camera.target.x -= step;      
    
    this.camera.translate();
    
    this.field.x = this.camera.pos.x;
    this.field.y = this.camera.pos.y;
    
    renderer.render(this.stage);
}

StateGame.prototype.update = function() {
    if (this.playerTurn) {
        
    } else {
        this.resolveEnemyTurn();
    }
}

StateGame.prototype.resolveEnemyTurn = function() {
    console.log('Enemy Turn');
    
    if (this.nmei == null) {
        this.nmei = setInterval(this.endTurn.bind(this), 3000);
    }
}

StateGame.prototype.handleKeys = function(e) {
    console.log(e.which);
    if (this.activeUI) {
        this.activeUI.handleInput(e);
    }
}

StateGame.prototype.handleMouse = function(e) {
    //e.x, e.y, e.button = 1;
    if (this.activeUI) {
        this.activeUI.handleInput(e);
    }
    
    var MOUSE_CLICKED = 1;
    if (e.type == 'mousedown') {
        this.pivot.x = this.camera.pos.x - e.clientX;
        this.pivot.y = this.camera.pos.y - e.clientY;
        this.pivot.active = true;
    }
    
    if (e.type == 'mouseup') {
        this.pivot.active = false;   
    }
    
    if (e.type == 'mousemove' && this.pivot.active) {
        this.camera.target.x = this.pivot.x + e.clientX;
        this.camera.target.y = this.pivot.y + e.clientY;
    }
}