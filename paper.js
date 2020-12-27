class Paper{
    constructor(x,y,radius) {
    var boptions = {restitution:0.8,friction:0.2,density:0.2};
    this.body = Bodies.circle(x,y,radius,boptions);
    this.width = radius;
    this.height = radius;
    World.add(world,this.body);
    }
    display() {
    push();
    fill("yellow");
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(CENTER);
    ellipse(0,0,this.width,this.height)
    pop();
    }
    }