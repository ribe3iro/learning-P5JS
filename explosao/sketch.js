let particulas = [];

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(51, 70);
	for(let i = particulas.length-1; i >= 0; i--){
		particulas[i].atualizar();
		particulas[i].mostrar();
		if(particulas[i].sumiu){
			particulas.splice(i, 1);
		}
	}
}

function mousePressed(){
	let cor1 = random(255);
	let cor2 = random(255);
	let cor3 = random(255);
	for(let i = 0; i < 100; i++){
		particulas.push(new Particula(mouseX, mouseY, cor1, cor2, cor3));
	}
}
