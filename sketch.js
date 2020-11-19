var END = 0;

var gamestste;

var ground;
var monkey , monkey_running;
var banana ,bananaimg, obstacle1, obstacleimg;
var foodgrp,obsgrp; 
var score = 0;

function preload(){
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimg = loadImage("banana.png");
  obstacleimg = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 foodgrp = new Group();
 obsgrp = new Group();
  
}


function draw() {
  
  background ("white");
  
  stroke("black");
  textSize(20);
  fill = ("black");
  score = Math.ceil(frameCount/frameRate());
  text("survival time : " + score,190,100);
  score = score + 1;
  
  if(obsgrp.isTouching(monkey)){
    
    gamestste = END;
    
  }
  
  else if(gamestste === END){
    
    monkey.velocityY = 0;
    
    score = 0;
    
    obsgrp.destroyEach();
    ground.visible = false;
    monkey.visible = false;
    score.visible = false;
    foodgrp.destroyEach();
    
  }
  
  if(keyDown("space") && monkey.y >= 120){
    
    monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  monkey.collide(ground);

  f();
  
  o();
  
  drawSprites();
  
}

function f(){
  
  if(frameCount % 80 === 0){
    
    banana = createSprite(600,50,20,20);
    banana.addImage(bananaimg);
    banana.scale = 0.1
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    banana.y = Math.round(random(120,200));
    
    foodgrp.add(banana);
    
  }
  
}

function o(){
  
  if(frameCount % 150 === 0){
    
  obstacle1 = createSprite(600,310,20,20);
  obstacle1.addImage(obstacleimg);
  obstacle1.scale = 0.2;
  obstacle1.velocityX = -3;
  obstacle1.lifetime = 200;
    
  obsgrp.add(obstacle1);
    
  }
  
}


