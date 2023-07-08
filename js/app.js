

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(220)
    var diameter = width;
    // set diameter to width of canvas

    while (diameter >= 10){

        circle(width/2, height/2, diameter);
        diameter-=10;
    }
}