class Nuvem{
    constructor(x, y){
        this.pos = createVector(x, y);
        this.vel = createVector(-1, 0);
        this.tam = random(40, 100);
        this.vel.setMag(map(this.tam, 40, 100, 10, 1));
        this.format = this.generateFormat();
    }

    generateFormat(){
        let xoff = random(1000);
        let yoff = random(1000);
        let format = [];
        for(let a = 0; a < TWO_PI; a+=0.1){
            let xnoise = map(noise(xoff), 0, 1, 5, 50);
            let ynoise = map(noise(yoff), 0, 1, 5, 50);
            let x = this.tam * cos(a) + xnoise;
            let y = this.tam/2 * sin(a) + ynoise;
            format.push(createVector(x, y));
            xoff += 0.05;
            yoff += 0.05;
        }

        return format;
    }

    update(){
        this.pos.add(this.vel);
        if(this.pos.x <= -100){
            this.format = this.generateFormat();
            this.pos.x = width+50;
            this.pos.y = random(height/3)
            this.vel.setMag(random(10));
        }
    }

    show(){
        push();

        translate(this.pos.x, this.pos.y);
        beginShape();
        for(let i = 0; i < this.format.length; i++){
            let p = this.format[i];
            noStroke();
            fill(255, map(this.tam, 40, 100, 150, 255));
            vertex(p.x, p.y);
        }
        endShape();

        pop();
    }
}