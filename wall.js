class Wall{
    constructor(x,y,width,height) {
    var boptions = {restitution:0.8,friction:0.2,density:0.2};
    this.body = Bodies.rectangle(x,y,width,height,boptions);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display() {
    push();
    fill("yellow");
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    }
    }