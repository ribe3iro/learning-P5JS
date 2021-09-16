class Particula{

	constructor(auxX, auxY, auxCor1, auxCor2, auxCor3){
		this.cor1 = auxCor1;
		this.cor2 = auxCor2;
		this.cor3 = auxCor3;
		this.escala = random(0, 20);
		this.pos = createVector(auxX, auxY);
		this.vel = createVector(random(-5,5), random(-5,5));
		this.tam = map(this.escala, 0, 20, 0.2, 2);
		this.sumiu = false;
	}

	atualizar(){
		this.pos.add(this.vel);
		this.vel.add(0, map(this.escala, 0, 20, 0.1, 0.2));
		if(this.pos.y >= height || this.pos.x >= width || this.pos.x <= 0){
			this.sumiu = true;
		}
	}

	mostrar(){
		stroke(this.cor1, this.cor2, this.cor3)
		circle(this.pos.x, this.pos.y, this.tam);
	}
}