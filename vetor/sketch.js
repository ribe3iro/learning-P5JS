let mouse;
let center;
let minus;
let plus;

function setup(){
    createCanvas(600, 400);
    center = createVector(width/2, height/2);
    strokeWeight(3);
}

function draw(){
    background(0);
    mouse = createVector(mouseX, mouseY);
    stroke(255);
    line(0,0, mouse.x, mouse.y);
    stroke(255);
    line(0,0, center.x, center.y);

    stroke(255, 0, 0);
    minus = p5.Vector.sub(center, mouse);
    line(0, 0, minus.x, minus.y);

    stroke(0, 255, 0);
    plus = p5.Vector.add(mouse, center);
    line(0,0, plus.x, plus.y);
}
