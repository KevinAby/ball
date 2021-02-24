var side1;
var side2;
var side3;
var ground;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  side1 = new dust(530,495,20,70)
  side2 = new dust(670,490,20,70)
  side3= new dust(600,495,130,20)

  ground = new Ground(400,500,1000,40)

  ball = new Ball(80,390,45,45)

	
  Engine.run(engine);
  
}


function draw() {
  
	background(0);
	
  
  

side1.display()
side2.display()
ground.display()
side3.display()

ball.display()

  drawSprites();
  
 
  papertoss()
}


function papertoss(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body, ball.body.position,{x:45,y:115})
}
}


