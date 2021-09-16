let nuvens = [];

function setup(){
    createCanvas(800, 500);
    for(let i = 0; i < 20; i++){
        nuvens.push(new Nuvem(random(width), random(height/3)));
    }
}

function draw(){
    background(color("#00BFFF"));
    for(let i = 0; i < nuvens.length; i++){
        nuvens[i].update();
        nuvens[i].show();
    }
}