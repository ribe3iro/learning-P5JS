class Tentaculo{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.life = 255;
    }

    atualizar(){
        let desired = p5.Vector.sub(this.pos, a.pos);

        let d = desired.mag();

        if(d < 100){
            desired.setMag(map(d, 0, 100, 0, 4));
        }else{
            desired.setMag(4);
        }

        let steer = p5.Vector.sub(desired, a.vel);
        
        steer.limit(0.05);
        a.acc.add(steer);
        this.life-=10;
    }

    mostrar(){
        stroke(this.life,0,0);
        line(a.pos.x, a.pos.y, this.pos.x, this.pos.y);
        fill(this.life,0,0);
        circle(this.pos.x, this.pos.y, 5);
    }
}