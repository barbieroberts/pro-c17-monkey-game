var PLAY
var END
var gameState=PLAY


var monkey,monkey_running
var ground,groundImage
var banana,bananaImage,foodGroup
var obstacle,obstacleImage,obstacleGroup
var score=0
var survivaltime=0


function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
     monkey=createSprite(80,315,20,20) 
     monkey.addAnimation("moving",monkey_running)
     monkey.scale=0.1
  
  
     
     ground=createSprite(400,350,900,10);
     ground.velocityX=-4
     ground.x=ground.width/2
     console.log(ground.x)

  
}


function draw() {
  background("lightGreen")
  if(gameState===PLAY){
    if(keyDown("space")){
      monkey.velocityY=-12  

     
  }
       monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x<=400){
    ground.x=200
  }
  
  text("Score: "+ score, 300,20);
  text("survival time:",100,20);
  
  if(frameCount%60 === 0){
    score=score+1
  }
    if(frameCount%100 === 0){
   
    obstacle=createSprite(Math.round(random(0,600)),330,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-2
    obstacle.scale=0.10
    obstacle.lifetime=200
}

    if(frameCount%80===0){
      banana=createSprite(330,Math.round(random(50,250)),10,10)
      banana.addImage(bananaImage)
      banana.velocityX=-2                           
      banana.scale=0.10
      
    if(banana.isTouching(monkey)){  
        survivaltime=surcivaltime+1  }
    }
    monkey.collide(ground);
   drawSprites();
}
}









