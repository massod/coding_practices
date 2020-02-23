
//This is class named bubble object
class Bubble{

    constructor(x,y){

        this.pos = creatVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
    }

    display(){
        
        //noFill();
        strokeWeight(2);
        stroke(255);
        ellipse(this.pos.x, this.pos.y,40,40);
    }

    applyForce(force){
        this.acc.add(force);
    }

    move(){

        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }
}
