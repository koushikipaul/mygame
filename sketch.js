var gameState = 0;



function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	player = new Player(100,580);

	
}


function draw() {
	background(0);
if(gameState == 0){

}
 if(gameState==1){

 }
//keyPressed();
player.display();
}
function keyPressed(){
if (keyCode === UP_ARROW) {

player.y -= 10;
player.canvaspoint =  {
	x:player.x,
	y:0
}



  }
if(keyCode === DOWN_ARROW){
player.y +=10;
player.canvaspoint =  {
	x:player.x,
	y:600
}
}
if(keyCode === LEFT_ARROW){
	player.x -=10;
	player.canvaspoint =  {
		x:0,
		y:player.y
	}
	}
	if(keyCode === RIGHT_ARROW){
		player.x +=10;
		player.canvaspoint =  {
			x:600,
			y:player.y
		}
		}
}