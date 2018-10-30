var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.rect(0, 0, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "black";
// ctx.stroke();
// ctx.closePath();

var x = canvas.width/2
var y = canvas.height-30

var dx = 2		// angle
var dy = -1 	// speed

var ballRadius = 10

// defining dimensions of the paddle
var paddleHeight = 10
var paddleWidth = 75
var paddleX = (canvas.width-paddleWidth)/2

// paddle movements which are false unless we press somethings
var rightPressed = false
var leftPressed = false

document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function keyDownHandler(event){
	if(event.keyCode == 39){
		rightPressed = true
	} else if (event.keyCode == 37){
		leftPressed = true
	}
}
function keyUpHandler(event){
	if(event.keyCode == 39){
		rightPressed = false
	} else if (event.keyCode == 37){
		leftPressed = false
	}
}


function drawBall(){
	ctx.beginPath()
	ctx.arc(x,y,ballRadius,0, Math.PI*2)
	ctx.fillStyle = 'green'
	ctx.fill()
	ctx.closePath()
}

// drawing the paddle
function drawPaddle(){
	ctx.beginPath()
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
	ctx.fillStyle = 'black'
	ctx.fill()
	ctx.closePath()
}

function draw() {
	ctx.clearRect(0,0,canvas.width, canvas.height)
	// calling the ball rendering function
	drawBall()
	// calling the paddle rendering function
	drawPaddle()

	// bouncing off the top and bottom edges
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
		dy = -dy
	}
	
	// bouncing off the left and right edges
	if(x + dx > canvas.width-ballRadius || x + dx <ballRadius){
		dx = -dx
	}

	// moving paddle left and right
	if(rightPressed){
		paddleX = paddleX + 7
	} else if (leftPressed){
		paddleX = paddleX - 7
	}

	x = x + dx
	y = y + dy
}
setInterval(draw, 10)

