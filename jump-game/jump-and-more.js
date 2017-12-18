var CANVAS_HEIGHT = 300;
var CANVAS_WIDTH = 400;
var JUMP_GAME = {
  player: new Image(),
  stopMain: null
}

/**
 * REFERENCES
 * https://developer.mozilla.org/en-US/docs/Games/Anatomy
 *
 *
 */

;(function () {
  function main( tFrame ) {
    JUMP_GAME.stopMain = window.requestAnimationFrame( main );
    var nextTick = MyGame.lastTick + MyGame.tickLength; 
    //lastTick keeps track of last update time. Always increments by tickLength
    //tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
    var numTicks = 0; //numTicks is how many updates should have happened between these two rendered frames.
    
    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - MyGame.lastTick; 
      //timeSinceTick is the time between requestAnimationFrame callback and last update.
      numTicks = Math.floor( timeSinceTick / MyGame.tickLength );
    }
    
    update( tFrame ); //Call your update method. In our case, we give it rAF's timestamp.
    render();
  }
  
  main(); // Start the cycle
  
})();

//to stop main loop
//use
//window.cancelAnimationFrame( JUMP_GAME.stopMain );


function init(){
  PLAYER.scr = "./jump-and-run_graphics/jump-and-run_main-character_stand.png";
  window.requestAnimationFrame(draw);
  var ctx = document.getElementById("jump").getContext('2d');

  
}

function draw(){
  
}

function drawOnCanvas() {
  var ctx = document.getElementById("jump").getContext('2d');
  oneRect(ctx, 10, 250);
}

function oneRect(canvasContext, x, y){
  canvasContext.fillStyle = 'rgba(200, 0, 200, 0.5)';
  canvasContext.fillRect(x, y, 50, 50); 
}

function moveRect(canvasContext, x, y){
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  oneRect(canvasContext, x, y);
}

function twoRects(canvasContext, x, y){
  canvasContext.fillStyle = 'rgb(200, 0, 0)';
  canvasContext.fillRect(x, y, 50, 50);
  canvasContext.fillStyle = 'rgba(0, 0, 200, 0.5)';
  canvasContext.fillRect(x+20, y+20, 50, 50);
}

function checkKeyPressed(e) {
  var canvas = document.getElementById("jump");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (e.keyCode == "32") {
      console.log("The 'space' key is pressed.");
      moveRect(ctx, 60, 200);
    }
  }
}

function start() {
  drawOnCanvas();
  window.addEventListener("keydown", checkKeyPressed, false);
  
}
