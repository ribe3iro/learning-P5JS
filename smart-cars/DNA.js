class DNA{
    constructor(dna){
        this.genes = [];
        
        if(dna){
            let n = random()*1000;
            for(let i = 0; i < dna.genes.length; i++){
                let vector = dna.genes[i].copy();

                let oldAngle = vector.heading();
                let newAngle = radians((noise(n)-0.5)*90) + oldAngle;

                let newMag = vector.mag() + (noise(n+1000)-0.5)*8;

                vector = p5.Vector.fromAngle(newAngle, newMag);
                this.genes.push(vector);
                n+=0.01;
            }

            this.maxSpeed = dna.maxSpeed + random(-2, 2);
            this.handling = dna.handling + random(-0.01, 0.01);
        }else{
            this.maxSpeed = random(1, 10);
            this.handling = random(0.01, 0.2);

            let angle = random(2*PI);
            let n = random()*1000;
            for(let i = 0; i < LIFESPAN; i++){
                let off = radians((noise(n)-0.5)*720);
                let vector = p5.Vector.fromAngle(angle+off, random(1, 10));

                this.genes.push(vector);
                n+=0.01;
            }
        }
    }
}