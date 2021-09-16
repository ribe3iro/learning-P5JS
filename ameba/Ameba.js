class Ameba{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.xoff = x;
        this.yoff = y;
    }

    atualizar(){
        console.log("velocidade: "+a.vel.mag());
        if(this.vel.mag() > 0){
            this.acc.sub(p5.Vector.add(this.vel).setMag(0.05));
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    mostrar(){
        stroke(255);
        fill(255);
        circle(this.pos.x, this.pos.y, 20);
    }
}