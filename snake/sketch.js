let particula;

let comida;
//0 = cima | 1 = baixo | 2 = esquerda | 3 = direita
let movendo = [false, false, false, false];

function setup(){
	createCanvas(600, 400);
	particula = new Particula(width/2, height/2);
	comida = createVector(random(width), random(height));
}

function draw(){
	background(51);

	if(particula.comeu(comida)){
		particula.vida = 255;  // a vida reseta
		comida = createVector(random(particula.r * 2, width - particula.r * 2),   // para que as comidas
							  random(particula.r * 2, height - particula.r * 2));  // não apareçam no campo que te joga pro meio
	}
	stroke(0, 255, 0);
	strokeWeight(10);
	point(comida.x, comida.y);
	
	particula.atualizar();
	particula.cantos();
	particula.mostrar();

	if(frameCount < 100){
		fill(255);
		noStroke();
		textSize(30);  // instruções
		text("[WASD] para MOVER", width/2 - 150, 50);
	}
}

function keyPressed(){
	switch(key.toLowerCase()){
		case 'w':
			movendo[0] = true;
			break;
		case 's':
			movendo[1] = true;
			break;
		case 'a':
			movendo[2] = true;
			break;
		case 'd':
			movendo[3] = true;
			break;
	}
}

function keyReleased(){
	switch(key.toLowerCase()){
		case 'w':
			movendo[0] = false;
			break;
		case 's':
			movendo[1] = false;
			break;
		case 'a':
			movendo[2] = false;
			break;
		case 'd':
			movendo[3] = false;
			break;
	}
}