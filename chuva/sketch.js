let gotas = [];

function setup(){
	createCanvas(640, 360);
	for(let i = 0; i < 500; i++){
		gotas.push(new Drop());
	}
}

function draw(){
	background(0);
	for(let i = 0; i < 500; i++){
		gotas[i].fall();
		gotas[i].show();
	}
}

class Drop{
	constructor(){
		this.r = random(0, 20);
		this.len = map(this.r, 0, 20, 10, 20);
		this.y = random(-100, -500);
		this.x = random(640);
		this.yspeed = map(this.r, 0, 20, 4, 10);
		this.grav = map(this.r, 0, 20, 0, 0.2)
	}
	fall(){
		this.y += this.yspeed;
		this.yspeed += this.grav;
		if(this.y >= 360){
			this.yspeed = map(this.r, 0, 20, 4, 10);
			this.y = 0;
			this.x = random(640);
		}
	}

	show(){
		stroke(0, 44, 245);
		line(this.x, this.y, this.x, this.y+this.len);
	}
}