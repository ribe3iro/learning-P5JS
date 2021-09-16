let a;
let t;
let lancar = true;

function setup(){
    createCanvas(800, 500);
    a = new Ameba(width/2, height/2);
    t = [];
}

function draw(){
    background(0);
    a.atualizar();
    a.mostrar();

    if(lancar){

        let d = p5.Vector.dist(a.pos, createVector(mouseX, mouseY));
        if(d > 300){
            var chance = 0.2;
        }else{
            var chance = map(d, 0, 300, 0.05, 0.2);
        }
        console.log(chance*100+"%");
        if(random(1) <= chance){
            let offSet = 500*chance;
            noFill();
            circle(mouseX, mouseY, offSet*2);
            let x = mouseX + random(-offSet,offSet);
            let y = mouseY + random(-offSet,offSet);
            t.push(new Tentaculo(x, y));
        }

    }

    for(let i = t.length - 1; i >= 0; i--){
        let tentaculo = t[i];
        tentaculo.atualizar();
        if(tentaculo.life <= 0){
            t.splice(i, 1);
        }else{
            tentaculo.mostrar();
        }
    }
}

function mouseClicked(){
    lancar = !lancar;
}
