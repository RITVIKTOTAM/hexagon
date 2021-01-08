const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon1,ground1,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16;
var ground2;


function setup() {
	var canvas = createCanvas(800,400);

    
  
    engine = Engine.create();
  world = engine.world;
  

 
  polygon1 = new Polygon(200,335,40,40);
  ground1 = new Ground(395,400,800,10);
  ground2 = new Ground(500,350,160,10);
  ball1 = new Ball(440,329,20,30);
  ball2 = new Ball(460,329,20,30);
  ball3 = new Ball(480,329,20,30);
  ball4 = new Ball(500,329,20,30);
  ball5 = new Ball(520,329,20,30);
  ball6 = new Ball(540,329,20,30);
  ball7 = new Ball(560,329,20,30);
  ball8 = new Ball(460,299,20,30);
  ball9 = new Ball(480,299,20,30);
  ball10 = new Ball(500,299,20,30);
  ball11 = new  Ball(520,299,20,30);
  ball12 = new Ball(540,299,20,30);
  ball13 = new Ball(520,269,20,30);
  ball14 = new Ball(500,269,20,30);
  ball15 = new Ball(480,269,20,30); 
  ball16 = new Ball(500,239,20,30);
  

    
   
    
	
  
  
   
    
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
 
  
   ground1.display();
   polygon1.display();
   ball1.display();
   ball2.display();
   ball3.display();
   ball4.display();
   ball5.display();
   ball6.display();
   ball7.display();
   ball8.display();
   ball9.display();
   ball10.display();
   ball11.display();
   ball12.display();
   ball13.display();
   ball14.display();
   ball15.display();
   ball16.display();
   ground2.display();

 
}

function keyPressed(){
  if  (keyDown(UP_ARROW)){
    Matter.Body.applyForce(polygon1.body,polygon1.body.position,{x:15,y:-15});
  }
}

