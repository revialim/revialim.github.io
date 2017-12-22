var canvas;
var ctx; 
var ballRadius;
var x;
var y;
var dx;
var dy;

function init() {
  canvas = document.getElementById("jump");
  ctx = canvas.getContext("2d");
  ballRadius = 10;
  x = canvas.width/2;
  y = canvas.height-30;
  dx = 1;
  dy = -1; 
  
  drawBall();
}

function drawBall(x,y) {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  console.log("in draw, x:" + x + ", y:" + y + "; dx: " + dx + ", dy: " + dy);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(x,y);
  
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
      dx = -dx;
  }
  if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
      dy = -dy;
  }
  
  x = x + dx;
  y = y + dy;

  console.log("in draw2, x:" + x + ", y:" + y + "; dx: " + dx + ", dy: " + dy);
  window.requestAnimationFrame(draw);
}

function main() {
  init();
  draw();
  ////setInterval(draw, 10);
  console.log("test");
  
  //window.requestAnimationFrame(draw);
  //draw(x,y);
  //window.addEventListener("keydown", checkKeyPressed, false);
  
}

/*
//var CANVAS_HEIGHT = 300;
//var CANVAS_WIDTH = 400;
var JUMP_GAME = {
  playerImg: new Image(),
  stopMain: null
}
*/

/**
 * REFERENCES
 * https://developer.mozilla.org/en-US/docs/Games/Anatomy
 *


;(function () {
  function main( tFrame ) {
    JUMP_GAME.stopMain = window.requestAnimationFrame( main );
    var nextTick = JUMP_GAME.lastTick + JUMP_GAME.tickLength; 
    //lastTick keeps track of last update time. Always increments by tickLength
    //tickLength is how frequently the game state updates. It is 20 Hz (50ms) here.
    var numTicks = 0; //numTicks is how many updates should have happened between these two rendered frames.
    
    if (tFrame > nextTick) {
      var timeSinceTick = tFrame - JUMP_GAME.lastTick; 
      //timeSinceTick is the time between requestAnimationFrame callback and last update.
      numTicks = Math.floor( timeSinceTick / JUMP_GAME.tickLength );
    }
    
    queueUpdates( numTicks );
    render( tFrame );
    JUMP_GAME.lastRender = tFrame;
  }
  
  function queueUpdates( numTicks ) {
    for(var i=0; i < numTicks; i++) {
      JUMP_GAME.lastTick = JUMP_GAME.lastTick + JUMP_GAME.tickLength; //Now lastTick is this tick.
      update( JUMP_GAME.lastTick );
    }
  }
  
  JUMP_GAME.lastTick = performance.now();
  JUMP_GAME.lastRender = JUMP_GAME.lastTick; //Pretend the first draw was on first update.
  JUMP_GAME.tickLength = 50; //Set simulation to run at 20Hz (50ms)
  
  //setInitialState(); //Performs whatever tasks are leftover before the mainloop must run.
  main(performance.now()); // Start the cycle
  
})();



//to stop main loop
//use
//window.cancelAnimationFrame( JUMP_GAME.stopMain );
 *
 */


/*
function init(){
  JUMP_GAME.playerImg.scr = "./jump-and-run_graphics/jump-and-run_main-character_stand.png";
  window.requestAnimationFrame(draw);
  var ctx = document.getElementById("jump").getContext('2d');
  
  
}

function draw(){
  oneCircle(ctx, x, y);
  dx = -2;
  dy = -2;
  
  x = x+dx;
  y = y+dy;
  
  //collision detection
  if(y + dy > canvas.height || y + dy < 0){
    dy = -dy;
  }
  if(x + dx > canvas.width || x + dx < 0){
    dx = -dx;
  }
}

function drawOnCanvas() {
  var ctx = document.getElementById("jump").getContext('2d');
  oneRect(ctx, 10, 250);
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
*/

//==========//
//  SHAPES  //
//==========//
/*
function oneCircle(canvasContext, x, y){
  canvasContext.beginPath();
  canvasContext.arc(x, y, 10, 0, Math.PI*2);
  canvasContext.fillStyle = "#0087af";
  canvasContext.fill();
  canvasContext.closePath();  
}

function oneRect(canvasContext, x, y){
  canvasContext.beginPath();
  canvasContext.fillStyle = 'rgba(200, 0, 200, 0.5)';
  canvasContext.fillRect(x, y, 50, 50); 
  canvasContext.closePath(); 
}

function moveRect(canvasContext, x, y){
  canvasContext.beginPath();
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  oneRect(canvasContext, x, y);
  canvasContext.closePath(); 
}

function twoRects(canvasContext, x, y){
  canvasContext.beginPath();
  canvasContext.fillStyle = 'rgb(200, 0, 0)';
  canvasContext.fillRect(x, y, 50, 50);
  canvasContext.fillStyle = 'rgba(0, 0, 200, 0.5)';
  canvasContext.fillRect(x+20, y+20, 50, 50);
  canvasContext.closePath(); 
}
*/