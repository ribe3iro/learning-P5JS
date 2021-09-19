class Car{
    constructor(w, h, best, parent_dna, population_id){
        this.w = w;
        this.h = h;
        this.population_id = population_id;
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        if(best){
            this.DNA = new DNA();
            this.DNA.maxSpeed = parent_dna.maxSpeed;
            this.DNA.handling = parent_dna.handling;
            this.DNA.genes = [...parent_dna.genes];
        }else if(parent_dna){
            this.DNA = new DNA(parent_dna);
        }else{
            this.DNA = new DNA();
        }
        this.fitness = 0;
        this.achieved = false;
        this.destroyed = false;
        this.lifeRemaining = 0;
        this.best = best;
    }

    show(){
        push();

        imageMode(CENTER);
        rectMode(CENTER);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        if(this.best){
            image(CAR_BEST, 0, 0, this.w, this.h);
        }else{
            image(CAR_IMAGE, 0, 0, this.w, this.h);
            let c = color(this.population_id*10, 100, 1, 1);
            fill(this.population_id*20, 100, 100, 10);
            rect(0, 0, this.w, this.h);
        }

        pop();
    }

    applyForce(force){
        this.acc.add(force);
    }

    update(currentLife){
        if(this.achieved || this.destroyed){
            return;
        }
        let steer = p5.Vector.sub(this.DNA.genes[currentLife], this.vel);
        steer.limit(this.DNA.handling);

        this.applyForce(steer);

        this.vel.add(this.acc);
        this.vel.limit(this.DNA.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        let d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
        if(d < target.r){
            this.achieved = true;
            this.pos = target.pos.copy();
            this.lifeRemaining = currentLife;
        }

        if(this.hits(obstacle) || 
           this.pos.x < 0 ||
           this.pos.x > width ||
           this.pos.y < 0 ||
           this.pos.y > height){
            this.destroyed = true;
        }
    }

    hits(obstacle){
        return this.pos.x > obstacle.pos.x-(obstacle.w/2) &&
               this.pos.x < obstacle.pos.x+(obstacle.w/2) &&
               this.pos.y > obstacle.pos.y-(obstacle.h/2) &&
               this.pos.y < obstacle.pos.y+(obstacle.h/2);
    }

    calculateFitness(){
        let d_target = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
        let d_obstacle = dist(this.pos.x, this.pos.y, obstacle.pos.x, obstacle.pos.y);
        this.fitness = d_obstacle*d_obstacle/((d_target*d_target)+0.001);

        if(this.destroyed){
            this.fitness = this.fitness/1.2;
        }

        return this.fitness;
    }
}