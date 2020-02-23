

let ball;

function setup(){

    createCanvas(400,400);
    ball = new Bubble(200,200);
}

function draw(){
    background(200);
    ball.display();
    //ellipse(200,200,40,40);
}
