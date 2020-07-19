
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	box1 = new Box(500,600,200,20);
	box2 = new Box(410,550,20,80);
	box3 = new Box(590,550,20,80);
	ball1 = new Ball(400,350,20);
    ground = new Ground(400,height,800,30); 
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  ground.display();
  drawSprites();
 
}



