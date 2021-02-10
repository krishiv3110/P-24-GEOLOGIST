var myhammer;
var myiron;
var mystone;
var myrubber;
var myground;
var sand1,sand2,sand3,sand4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	myhammer = new Hammer(350,350,110,40)
	myiron = new Iron(175,350,100,50)
	mystone = new Stone(525,350,130,100)
	myrubber=new Rubber(700,350,40)
  myground=new Ground(400,650,1000,10)
  sand1 = new Sand(25,350,5)
  sand2 = new Sand(50,350,5)
  sand3 = new Sand(100,350,5)
  sand4 = new Sand(35,350,5)
  sand5 = new Sand(75,350,5)
  sand6 = new Sand(725,350,5)
  sand7 = new Sand(750,350,5)
   
  Engine.run(engine);
  
  World.mouseY=myhammer.y;
  myhammer.x= World.mouseX;
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  myhammer.y = World.mouseY
  World.mouseX= myhammer.x
 
 console.log(myhammer.x)


  myhammer.display();
  myiron.display();
  mystone.display();
  myrubber.display();
  myground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();

  drawSprites();
 
 
}



