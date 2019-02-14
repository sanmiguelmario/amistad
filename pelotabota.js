var x=200;
var velx = 5;
var y=200;
var vely = 10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	ellipse(x,y,50,50);
	moverx();
	botarx();
	movery();
	botary();
	
	}
	

function moverx(){
x=x+velx;
}

function botarx(){
		if(x< 25)
		velx = velx*-1;
	if(x > 375){
		velx = velx*-1;
	}



}
function movery(){
	y=y+vely;
}

function botary(){
	if(y<25)
		vely=vely*-1;
	if(y>375){
		vely=vely*-1;
	}
}
