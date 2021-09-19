class Obstacle{
    constructor(x, y, w, h){
        this.pos = createVector(x, y);
        this.w = w;
        this.h = h;
    }

    show(){
        push();

        fill(255);
        rectMode(CENTER);
        translate(this.pos.x, this.pos.y);
        rect(0, 0, this.w, this.h);

        pop();
    }
}