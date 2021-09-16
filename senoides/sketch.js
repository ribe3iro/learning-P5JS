let radius;
let angle = 0;
let senoide = [];

function setup(){
	createCanvas(400, 400);
	radius = 50 * (4 / PI);
}

function draw(){
	translate(width/4, height/2);
	background(0);
	for(let a = angle + TWO_PI; a >= angle; a-=0.01){
		let x = radius * cos(a);      // ALTERE AQUI!!!
		let y = radius * sin(3*a);    // ALTERE AQUI!!!
		//y += radius * sin(a) * sin(a);
		stroke(map(a, angle, angle + TWO_PI, 255, 0));
		strokeWeight(3);
		point(x, y);
	}

	let x = radius * cos(angle);     // ALTERE AQUI!!!
	let y = radius * sin(3*angle);   // ALTERE AQUI!!!
	//y += radius * sin(angle) * sin(angle);
	stroke(0,255,0);
	strokeWeight(5);
	point(x, y);
	senoide.unshift(y);

	if(senoide.length > 200){
		senoide.pop();
	}

	noFill();
	stroke(255);
	strokeWeight(1);
	beginShape();

	for(let i = 0; i < senoide.length; i++){
		vertex(i + 100, senoide[i]);
	}

	endShape();

	line(x, y, 100, senoide[0]);

	stroke(0,255,0);
	strokeWeight(5);
	point(100, senoide[0]);


	angle-=0.1;
}
