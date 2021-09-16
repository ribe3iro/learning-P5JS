class Cell{
    constructor(x, y, c){
        this.pos = createVector(x, y);
        this.acc = createVector();
        this.carn = c;  // 0 = vegg | 1 = carn | -1 = plant
        this.r = random(5, 15);
        this.perceptionR = random(20, 80);
        this.maxSpeed = random(4, 8);
        this.vel = p5.Vector.random2D().mult(this.maxSpeed/4);
        this.maxForce = random(0.01, 0.2);
        this.life = 200;
    }

    update(){
        this.edges();

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.life--;
    }

    eat(other){
        let d = dist(this.pos.x, 
                     this.pos.y, 
                     other.pos.x, 
                     other.pos.y);
        
        return (d < this.r + other.r);
    }

    edges(){
        if(this.pos.x > width){
            this.pos.x = 0;
        }else if(this.pos.x < 0){
            this.pos.x = width;
        }

        if(this.pos.y > height){
            this.pos.y = 0;
        }else if(this.pos.y < 0){
            this.pos.y = height;
        }
    }

    flee(fear){
        let desired = p5.Vector.sub(fear, this.pos);
        let d = desired.mag()
        if(d <= this.perceptionR){
            desired.setMag(this.maxSpeed);
            desired.mult(-1);

            let steering = p5.Vector.sub(desired, this.vel);
            steering.limit(this.maxForce);

            this.applyForce(steering);
        }
    }

    seek(target){
        let desired = p5.Vector.sub(target, this.pos);
        let d = desired.mag()
        if(d <= this.perceptionR){
            desired.setMag(this.maxSpeed);

            let steering = p5.Vector.sub(desired, this.vel);
            steering.limit(this.maxForce);

            this.applyForce(steering);
        }
    }

    applyForce(force){
        this.acc.add(force);
    }

    reproduce(){
        let cell1 = new Cell(this.pos.x, this.pos.y, this.carn);
        cell1.r = this.r;
        cell1.perceptionR = this.perceptionR;
        cell1.maxSpeed = this.maxSpeed;
        cell1.vel = p5.Vector.random2D().mult(this.vel.mag());
        cell1.maxForce = this.maxForce;

        let cell2 = new Cell(this.pos.x, this.pos.y, this.carn);
        cell2.r = this.r;
        cell2.perceptionR = this.perceptionR;
        cell2.maxSpeed = this.maxSpeed;
        cell2.vel = p5.Vector.random2D().mult(this.vel.mag());
        cell2.maxForce = this.maxForce;

        return [cell1, cell2];
    }

    show(){
        if(this.carn == -1){
            fill(0, 255, 0);
        }else{
            noFill();
            stroke(255);
            circle(this.pos.x, this.pos.y, this.perceptionR*2);
            if(this.carn == 0){
                fill(60, 60, 255);
            }else{
                fill(255, 30, 30);
            }
        }

        noStroke();
        circle(this.pos.x, this.pos.y, this.r*2);
    }
}
