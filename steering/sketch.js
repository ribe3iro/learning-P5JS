let v;

function setup(){
    createCanvas(800, 400);
    v = new Vehicle(width/2, height/2);
}

function draw(){
    background(0);
    v.show();
    v.update();
}
