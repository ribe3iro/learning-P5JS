let aux = 0;
let x = 0;
let y;

function setup(){
	createCanvas(600, 400);
	background(0);
	stroke(random(255), random(255), random(255));
	beginShape(LINES);
}

function draw(){
	if(x >= width){
		endShape();
		x = 0;
		stroke(random(255), random(255), random(255));
		y = random(height);
		aux = random(300);
		beginShape(LINES);
	}else{
		y = map(noise(aux), 0, 1, 0, height);
		vertex(x, y);
		x += 5;
		aux += 0.03;
	}
}
