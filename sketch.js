

let bubble;

function setup(){

    createCanvas(400,400);
    bubble = new Bubble(200,200);
}

function draw(){

    background(204);
    bubble.display();
}
