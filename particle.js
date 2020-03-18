class Particle{
    constructor(x,y){
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0)
    }

    update(){


    }

    show(){
        ellipse(this.pos.x,this.pos.y,30,30);
    }
}