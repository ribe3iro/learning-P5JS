class Population{
    constructor(id){
        this.id = id;
        this.remaining = LIFESPAN;

        this.cars = [];
        for(let i = 0; i < POPULATION_LENGTH; i++){
            this.cars.push(new Car(CAR_WIDTH, CAR_HEIGHT, false, false, this.id));
        }
    }

    run(){
        this.remaining--;
        if(this.remaining >= 0){
            this.cars.forEach(car => {
                car.update(this.remaining);
                car.show();
            });
            return true;
        }else{
            return false;
        }
    }

    restart(){
        this.remaining = LIFESPAN;
        let record = -1;
        let bestCars = [];
        this.cars.forEach(car => {
            let fit = car.calculateFitness();
            if(fit >= record){
                record = fit;
            }
        });

        this.cars.forEach(car => {
            let fit = car.fitness;
            if(fit == record){
                bestCars.push(car);
            }
        });

        let best = bestCars[0];
        if(bestCars.length > 1){
            bestCars.forEach(car => {
                if(car.lifeRemaining > best.lifeRemaining){
                    best = car;
                }
            });
        }

        this.cars = [];
        this.cars.push(new Car(CAR_WIDTH, CAR_HEIGHT, true, best.DNA, this.id));

        for(let i = 1; i < POPULATION_LENGTH; i++){
            this.cars.push(new Car(CAR_WIDTH, CAR_HEIGHT, false, best.DNA, this.id));
        }
    }
}