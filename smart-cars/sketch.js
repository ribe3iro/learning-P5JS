let CAR_IMAGE;
let CAR_BEST;
function preload() {
    CAR_IMAGE = loadImage('images/carro.png');
    CAR_BEST = loadImage('images/carro_best.png');
}


let cars = [];
let lifeDuration = 200;
let populations = [];
const LIFESPAN = 500;
const POPULATION_LENGTH = 50;
const CAR_WIDTH = 60;
const CAR_HEIGHT = 30;
const GENERATIONS_LENGTH = 5;
let target;
let generation = 1;
let alreadyCounted = false;
let generationP;
let obstacle;

function setup(){
    createCanvas(1200, 800);
    for(let i = 1; i <= GENERATIONS_LENGTH; i++){
        populations.push(new Population(i));
    }

    target = new Target(width/2, height/10, 25);

    obstacle = new Obstacle(width/2, height/3, width/1.5, 20);

    generationP = createP();
    generationP.html("Generation: "+generation);
    noStroke();
    colorMode(HSB, 100);
}

function draw(){
    background(0);
    target.show();
    populations.forEach(population => {
        if(!population.run()){
            population.restart();
            if(!alreadyCounted){
                generation++;
                generationP.html("Generation: "+generation);
                alreadyCounted = true;
            }
        }
    });
    alreadyCounted = false;
    obstacle.show();
}
