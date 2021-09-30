let ORIGINAL_PHOTO;
let CURR_PHOTO;

function preload() {
    ORIGINAL_PHOTO = loadImage('images/example.png');
}

const SCALE = 10;
const FRAME_RATE_DURING_SAVE = 5;
const MAX_NUM_PIXELS = 100000;
const SWAPS_PER_FRAME = 2;
let SAVE = false;

let gridx;
let gridy;
let frame = 0;

let original_swaps = [];

function setup(){
    // Resizing the image, so it can fit perfectly in scale
    let newWidth = ORIGINAL_PHOTO.width;
    let newHeight = ORIGINAL_PHOTO.height;

    while(newWidth * newHeight >= MAX_NUM_PIXELS){
        newWidth = floor(newWidth*0.9);
        newHeight = floor(newHeight*0.9);
    }
    while(newWidth % SCALE != 0){
        newWidth++;
    }
    while(newHeight % SCALE != 0){
        newHeight++;
    }

    ORIGINAL_PHOTO.resize(newWidth, newHeight);

    createCanvas(ORIGINAL_PHOTO.width, ORIGINAL_PHOTO.height);
    CURR_PHOTO = createImage(width, height);
    noFill();
    stroke(255);
    console.log(width, height);
    gridx = floor(width/SCALE);
    gridy = floor(height/SCALE);
    if(SAVE){
        frameRate(FRAME_RATE_DURING_SAVE);
    }else{
        frameRate(30);
    }

    let origins = [];
    let destinations = [];

    for(let i = 0; i < height/gridy; i++){
        for(let j = 0; j < width/gridx; j++){
            const origin = {
                'x': j,
                'y': i
            };

            let destination = {
                'x': j, 
                'y': i
            };

            origins.push(origin);
            destinations.push(destination);
        }
    }

    shuffle(origins, true);
    shuffle(destinations, true);
    
    origins.forEach(origin => {
        const destination = destinations.pop();
        const swap = { origin, destination };
        original_swaps.push(swap);
    });


    ORIGINAL_PHOTO.loadPixels();

    CURR_PHOTO.loadPixels();
    for(let i = 0; i < ORIGINAL_PHOTO.pixels.length; i++){
        CURR_PHOTO.pixels[i] = ORIGINAL_PHOTO.pixels[i];
    }
    CURR_PHOTO.updatePixels();

    image(CURR_PHOTO, 0, 0);
    if(SAVE){
        save(CURR_PHOTO, 'image'+frame+'.png');
        frame++;
    }
    clone_original_to_swaps();
}

let swaps = [];
let shuffling = true;

function draw(){
    CURR_PHOTO.loadPixels();
    for(let t = 0; t < SWAPS_PER_FRAME; t++){
        if(swaps.length > 0){
            const curr_swap = swaps.pop();

            const ORIGIN_X = curr_swap.origin.x*gridx;
            const ORIGIN_Y = curr_swap.origin.y*gridy;

            const DESTINATION_X = curr_swap.destination.x*gridx;
            const DESTINATION_Y = curr_swap.destination.y*gridy;

            for(let i = 0; i < gridx; i++){
                for(let j = 0; j < gridy; j++){
                    const ox = i + ORIGIN_X;
                    const oy = j + ORIGIN_Y;

                    const dx = i + DESTINATION_X;
                    const dy = j + DESTINATION_Y;

                    const origin_index = (ox + oy * width)*4;
                    const destination_index = (dx + dy * width)*4;

                    for(let k = 0; k <= 3; k++){  // RED, BLUE, GREEN, ALPHA
                        CURR_PHOTO.pixels[origin_index+k] = ORIGINAL_PHOTO.pixels[destination_index+k];
                    }
                }
            }
        }else{
            clone_original_to_swaps();
            if(shuffling){
                swaps.map((s) => {
                    s.destination.x = s.origin.x;
                    s.destination.y = s.origin.y;
                });
            }else{
                if(SAVE){
                    SAVE = false;
                    frameRate(30);
                }
            }
            shuffle(swaps, true);
            shuffling = !shuffling;
            break;
        }
    }

    CURR_PHOTO.updatePixels();
    image(CURR_PHOTO, 0, 0);

    if(SAVE){
        save(CURR_PHOTO, 'image'+frame+'.png');
        frame++;
    }
}

function clone_original_to_swaps(){
    swaps = [];
    original_swaps.map((s) => {
        const origin = {
            'x': s.origin.x,
            'y': s.origin.y
        };
        const destination = {
            'x': s.destination.x,
            'y': s.destination.y
        };

        const swap = { origin, destination };
        swaps.push(swap)
    });
}
