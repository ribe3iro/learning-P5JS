class Target{
    constructor(x, y, r){
        this.pos = createVector(x, y);
        this.r = r;
    }

    show(){
        circle(this.pos.x, this.pos.y, this.r*2);
    }
}