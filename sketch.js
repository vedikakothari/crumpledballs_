
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Paper(100,500,20,20);

	var options = {
		isStatic: true
	}
	ground = Bodies.rectangle(400,670,800,30,options);
	World.add(world,ground)

	box1 = new Box(600,640,200,20);
	box2 = new Box(505,600,20,100);
	box3 = new Box(700,600,20,100);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  ball1.display();
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);

  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.ball.position,{x:85,y:-85});
	}
}

