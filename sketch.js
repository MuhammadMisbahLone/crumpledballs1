
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1,wall2,wall3;
var paper;
function preload(){


}

	


function setup() {
	createCanvas(800, 700);
	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
	wall1 = new Wall(640,640,100,20);
	wall2 = new Wall(700,590,20,100);
	wall3 = new Wall(580,590,20,100);
	paper = new Paper(100,400,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
  rect(ground.body.position.x,ground.body.position.y,width,10);
  
  drawSprites();
  wall1.display();
  wall2.display();
  wall3.display();
  paper.display();
}
function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.position,{x:10,y:-10})
	}
}


