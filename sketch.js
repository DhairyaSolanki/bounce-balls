const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob (200, 100, 35);
	bob2 = new Bob (135, 100, 35);
	bob3 = new Bob (170, 100, 35);
	bob4 = new Bob (205, 100, 35);
	bob5 = new Bob (240, 100, 35);
	///roof = new rooftop (200, 50, 50);
	rope1 = new rope (bob1.body, {x:100, y:-1000});
	rope2 = new rope (bob2.body, {x: 135, y: 0});
	rope3 = new rope (bob3.body, {x:170, y:0});
	rope4 = new rope (bob4.body, {x:205, y:0});
	rope5 = new rope (bob5.body, {x:240, y:0});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
//roof.display();
rope1.display();
bob1.display();
rope2.display();
bob2.display();
rope3.display();
bob3.display();
rope4.display();
bob4.display();
rope5.display();
bob5.display();
}

function keyPressed ()	{

	if (keyCode == 32){

		Matter.Body.applyForce (bob1.body, bob1.body.position, {x: -30, y:-30});
	}

}


