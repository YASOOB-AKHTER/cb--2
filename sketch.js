var box1,box2,box3;
var ball;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	box1 = new bin(950,490,30,150);
	box2 = new bin(750,490,30,150);
  box3= new box(850,500,200,200);
  
    ground= new Ground(500,575,995,30);
	ball= new BALLS(200,500,10);
  

  
}


function draw() {
	Engine.update(engine);
  
  background("white");
  ground.display();
  
  box1.display(); 
  box2.display(); 
  box3.display(); 
  ball.display();
  

 
  
 
}
function keyPressed(){
    
  if (keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:17,y:-17});




  }
}
