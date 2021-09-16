class Particula{
    constructor(x_, y_){
        this.pos = createVector(x_, y_);
        this.vel = createVector();
        this.acc = createVector();
        this.vida = 355;  // para que o player não perca vida durante os 100 primeiros frames
                          // (enquanto as instruções aparecem)

        this.r = 8;

        this.rastro = [];
        this.tam = 0;
    }

    mostrar(){
        strokeWeight(5);
        for(let i = this.rastro.length  - 1; i > 0; i--){  // "cauda"
            let blue = 255 - ((i * 10) % 256);
            stroke(200, 0, blue);
            let prev = this.rastro[i-1];
            let next = this.rastro[i];
            line(prev.x, prev.y, next.x, next.y);
        }

        strokeWeight(1);
        noStroke();
        fill(255 - this.vida, this.vida, this.vida);
        ellipse(this.pos.x, this.pos.y, this.r * 2);  // "cabeça"

        fill(255);
        noStroke();
        textSize(15);  // score
        text("Score: " + this.tam, 5, 20);
    }

    atualizar(){
        this.vida--;
        if(this.vida == 0){  // se a vida chegar em 0, o jogo acaba
            fill(255);
            noStroke();
            textSize(30);
            text("Game Over", width/2 - 85, height/2);
            noLoop();
        }
        this.vel.limit(7);

        this.mover();
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.mult(0);

        this.rastro.push( createVector(this.pos.x, this.pos.y) );  // guarda as localizações pra fazer a cauda

        if(this.rastro.length > this.tam){
            this.rastro.splice(0,1);
        }
    }

    comeu(food){
        let d = dist(this.pos.x, this.pos.y, food.x, food.y);
        if(d < this.r + 5){  // 5 = raio da comida
            this.tam++;
            return true;
        }else{
            return false;
        }
    }

    mover(){
        let acele = 0.15;
        if(movendo[0]){ //cima
            this.acc.add(0, -acele);
        }
        if(movendo[1]){ //baixo
            this.acc.add(0, acele);
        }
        if(movendo[2]){ //esquerda
            this.acc.add(-acele, 0);
        }
        if(movendo[3]){ //direita
            this.acc.add(acele, 0);
        }
        if(!movendo[0] && !movendo[1] && !movendo[2] && !movendo[3]){  // não está apertando nenhuma tecla
            this.vel.mult(0.99);  // "atrito" (a cada frame, a velocidade é reduzida em 1%)
        }
    }

    cantos(){
        let forca = 1;
        if(this.pos.x > width - this.r * 2){
            this.acc.add(-forca, 0);
        }else if(this.pos.x < this.r * 2){
            this.acc.add(forca, 0);
        }else if(this.pos.y > height - this.r * 2){
            this.acc.add(0, -forca);
        }else if(this.pos.y < this.r * 2){
            this.acc.add(0, forca);
        }
    }
}