function draw() {
  var canvas = document.getElementById("jump");
  var height = 300;
  var width = 400;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    oneRect(ctx, 10, 250);
  }
}

function oneRect(canvasContext, x, y){
  canvasContext.fillStyle = 'rgba(200, 0, 200, 0.5)';
  canvasContext.fillRect(x, y, 50, 50); 
}

function moveRect(canvasContext, x, y){
  clearRect();
  oneRect(canvasContext, x, y);
}

function twoRects(canvasContext, x, y){
  canvasContext.fillStyle = 'rgb(200, 0, 0)';
  canvasContext.fillRect(x, y, 50, 50);
  canvasContext.fillStyle = 'rgba(0, 0, 200, 0.5)';
  canvasContext.fillRect(x+20, y+20, 50, 50);
}

function checkKeyPressed(e) {
  if (e.keyCode == "32") {
    console.log("The 'space' key is pressed.");
  }
}

function start() {
  draw();
  window.addEventListener("keydown", checkKeyPressed, false);
  
}