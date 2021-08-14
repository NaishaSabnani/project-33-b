const World= Matter.World
const Engine=Matter.Engine
const Bodies= Matter.Bodies
var spriteRunning, spriteRunningImg
var spriteWalking, spriteWalkingImg
var bg, backgroundImg
var snowflake,snowFlakeImg
var bgMusic
var engine, world


function preload()
{
  bg="snow2.jpg"
  backgroundImg=loadImage(bg)
  spriteRunningImg=loadAnimation("images2/run1.png","images2/run2.png","images2/run3.png","images2/run4.png","images2/run5.png","images2/run6.png","images2/run7.png","images2/run8.png","images2/run9.png","images2/run10.png","images2/run11.png",)
  spriteWalkingImg=loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png","images/walk4.png","images/walk5.png","images/walk6.png","images/walk7.png","images/walk8.png","images/walk9.png","images/walk10.png",)
  snowFlakeImg=loadImage("snow4.webp")
  bgMusic=loadSound("music.mp3")
  
}

function setup() {
  createCanvas(800,400);

  engine= Engine.create();
  world= engine.world;
  Engine.run(engine);


  spriteWalking=createSprite(200, 300);
  spriteWalking.addAnimation("walking",spriteWalkingImg)
  spriteWalking.scale =0.5

  spriteRunning=createSprite(600,300)
  spriteRunning.addAnimation("running",spriteRunningImg)
  spriteRunning.scale =0.5

  snowflake = new snowFlake(180,40,30,30);
}

function draw() {

  //Engine.update(engine);

  background(backgroundImg);
  bgMusic.play();  

  edges= createEdgeSprites();
  spriteWalking.collide(edges);
  spriteRunning.collide(edges)

  spriteRunning.velocityX=-1
  spriteWalking.velocityX=1

 if(spriteRunning.isTouching(edges))
  {
    spriteRunning.x=350
    spriteRunning.velocityX=-1

  }

  if(spriteWalking.isTouching(edges))
  {
    spriteWalking.x=50
    spriteWalking.velocityX=1

  }
  snowflake.display()
  spawnSnowFlakes()

 

  drawSprites();
  
  
}





function spawnSnowFlakes()
{

  if(frameCount%20===0)
  {
    
  
snowflake = new snowFlake(random(20,750),-10,30,30);

//snowflake.addImage(snowFlakeImg);
    
      
      
    //snowflake.velocityY=3

  
      
      
  
      

  }
}