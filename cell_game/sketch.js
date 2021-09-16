let cells = [];

function setup(){
	createCanvas(800, 600);
	for(let i = 0; i < 5; i++){
		carn = floor(random(-1, 2));
		cells.push(new Cell(random(width), random(height), carn));
	}
}

function draw(){
	background(51);
	if(random() <= 0.1){
		cells.push(new Cell(random(width), random(height), -1));
	}
	if(random() <= 0.05){
		cells.push(new Cell(random(width), random(height), 1));
	}
	if(random() <= 0.05){
		cells.push(new Cell(random(width), random(height), 0));
	}

	for(let i = 0; i < cells.length; i++){
		for(let j = i; j < cells.length; j++){
			if(cells[i].carn == 1 && cells[j].carn == 0){
				cells[i].seek(cells[j].pos);
				cells[j].flee(cells[i].pos);
			}else if(cells[i].carn == 0 && cells[j].carn == 1){
				cells[i].flee(cells[j].pos);
				cells[j].seek(cells[i].pos);
			}else if(cells[i].carn == 0 && cells[j].carn == -1){
				cells[i].seek(cells[j].pos);
			}
		}
	}

	let carns = cells.filter(x => x.carn == 1);
	let veggs = cells.filter(x => x.carn == 0);
	let plants = cells.filter(x => x.carn == -1);

	for(let i = veggs.length-1; i >= 0; i--){
		for(let j = carns.length-1; j >= 0; j--){
			if(  carns[j].eat(veggs[i])  ){
				if( carns[j].r >= veggs[i].r ){
					veggs.splice(i, 1);
					let c = carns[j].reproduce();
					carns.push(c[0], c[1]);
					carns.splice(j, 1);
					break;
				}
				carns.splice(j, 1);
			}
		}
	}

	for(let i = plants.length-1; i >= 0; i--){
		for(let j = veggs.length-1; j >= 0; j--){
			if(  veggs[j].eat(plants[i])  ){
				plants.splice(i, 1);
				let c = veggs[j].reproduce();
				veggs.push(c[0], c[1]);
				veggs.splice(j, 1);
				break;
			}
		}
	}

	cells = [...veggs];
	cells = cells.concat(carns);
	cells = cells.concat(plants);

	for(let i = 0; i < cells.length; i++){
		let c = cells[i]
		if(c.carn != -1){
			c.update();
		}if(c.life <= 0){
			cells.splice(i, 1);
		}
		c.show();
	}
}
