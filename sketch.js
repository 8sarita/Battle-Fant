
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var play;
var end;
var vsState;

var gameState = vsState;
var player , playerimg;
var monster1 ,monster2, monsterImg1, monsterImg2 ;
var vs , vsImg;
var Ground , GroundImg;

 





function preload()
{

	monsterImg1 = loadImage("monster.gif");
	monsterImg2 = loadImage("monsterchange.gif");
	vsImg = loadImage("vs.jpg");


	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  if(gameState=== vsState){

	background(vsImg);

  }










  drawSprites();
 
}



