class Vehicle{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector();
        this.acc = createVector();
        this.maxSpeed = 4;
        this.maxForce = 0.1;
    }

    update(){
        let desired = p5.Vector.sub(createVector(mouseX, mouseY), this.pos);

        let d = desired.mag();
        if( d > 100 ){
            desired.setMag(this.maxSpeed);
        }else{
            let s = map(d, 0, 100, 0, this.maxSpeed);
            desired.setMag(s);
        }

        let steer = p5.Vector.sub(desired, this.vel);

        steer.limit(this.maxForce);
        this.acc.add(steer);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show(){
        stroke(255);
        ellipse(this.pos.x, this.pos.y, 10, 10);
    }
}
