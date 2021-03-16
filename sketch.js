var ground,player,iground,background1,stone,gameState,end=0,play=1,stonegroup,gameover,gameoverimg;

function preload(){
  background1 = loadImage("background.jpg")
  ground1 = loadImage("ground2.png")
  stoneimg = loadImage("stone3.png")
  jumpingAnimation = loadAnimation(
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump00.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump01.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump02.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump03.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump04.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump05.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump06.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump07.png', 
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump08.png',     
    'https://la-wit.github.io/build-an-infinite-runner/build/images/sprites/purpleNinja/jump09.png'    
  );
  gameoverimg = loadImage("over.png")

}


function setup(){
    createCanvas (1300,500)
    gameState = play

    ground = createSprite (650,480,2600,50)
    ground.addImage(ground1)
    ground.velocityX=-4
    
    player = createSprite (100,430,10,80)
   // player.addAnimation("run",runningAnimation)
    player.addAnimation("jump",jumpingAnimation)
    player.shapeColor="blue"
    player.scale=3

    iground = createSprite (650,480,1300,15)
    iground.visible=false
    
    stonegroup = new Group();

    gameover = createSprite (650,250,50,50)
    gameover.addImage("game",gameoverimg)
    gameover.visible = false
}


function draw (){
    background(background1)
    if (gameState==play){
      if (ground.x<0){
        ground.x=650
       }   
        player.velocityY=player.velocityY+0.3
        player.collide(iground)
       
        spwanstones();
        if (stonegroup.isTouching (player)){
          gameState = end
        }
    }

    if (gameState == end){
      player.velocityY = 0
      ground.velocityX = 0
      stonegroup.setVelocityXEach (0)
      stonegroup.setLifetimeEach (-1)
      gameover.visible=true
    }

    drawSprites();
}

 function keyPressed(){
   console.log (player.y)
  if (keyCode==UP_ARROW&&(player.y>350)){
    player.velocityY=-12
   // player.changeAnimation("jump",jumpingAnimation)
    console.log ("hello") 
  }  
 }


function spwanstones (){
  if (frameCount%240==0){
    var stone = createSprite(1200,425,50,50)
    stone.setCollider("circle",0,0,60)
    stone.velocityX=-5
    stone.addImage("stone",stoneimg)
    stone.lifetime = 500
  stonegroup.add (stone)
  }
}


function reset (){

  gameState = End;
   if (gameState === END) {
    ground.velocityX = 0;
}
}