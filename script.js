const player = document.getElementById("player");

player.addEventListener("keydown", handleInput);
var vx = 0.0;

function handleInput(event){
	if (key == "a" || key == "A"){
        vx -= 0.01;
    }
}
window.requestAnimationFrame(gameLoop);
function draw() {
    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);
}
let secondsPassed;
let oldTimeStamp;
let fps;
let rectX = 0;
let rectY = 0;
let canvas;
    let context;

    window.onload = init;

    function init(){
        canvas = document.getElementById('canvas');
        context = canvas.getContext('2d');
    

function update() {
    rectX += 1;
    rectY += 1;
}
function gameLoop(timeStamp) {

    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    // Draw number to the screen
    context.fillStyle = 'white';
    context.fillRect(0, 0, 200, 100);
    context.font = '25px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 10, 30);

    // Perform the drawing operation
    update();
    draw();

    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}
