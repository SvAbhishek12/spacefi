var asteroid;
var bullet;

function preload(){
  bgImg=loadImage("assets/bg.jpeg");
  shipImg=loadImage("assets/ship.png");
  stoneImg=loadImage("assets/stone.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(displayWidth/2,displayHeight/2,30,30);
  bg.addImage(bgImg)
  bg.scale=0.5

  // creating spaceship;

  spaceship=createSprite(displayWidth-1160,displayHeight-260,50,50);
  spaceship.addImage(shipImg);
  spaceship.scale=0.4

  asteroidGroup = createGroup();
  bulletGroup = createGroup();


  
}

function draw() {

  if(keyWentDown("space")){
    bullet=createSprite(displayWidth-1150,spaceship.x-260,20,10)
     bullet.velocityY=-20;
     bulletGroup.add(bullet);
    //  //change the depth of bullet;
    //  spaceship.depth=bullet.depth;
    //  spaceship.depth=spaceship.depth+2
  }

  if(keyDown("LEFT_ARROW")){
    spaceship.x=spaceship.x-25;   
  }
  if(keyDown("RIGHT_ARROW")){
    spaceship.x=spaceship.x+25;
 
  }

  if(spaceship.isTouching(asteroidGroup)){
    for(var i=0; i<asteroidGroup.length;i++){
       if(asteroidGroup[i].isTouching(spaceship)){
         asteroidGroup[i].destroy();
       }
    }
 }

  asteroidA();
  drawSprites();
  
}


function asteroidA(){
  if(frameCount%60==0){
    asteroid=createSprite(random(width-1150,width-100),random(50,50),20,20);
    asteroid.velocityY=3
    asteroid.addImage(stoneImg);
    asteroid.scale=0.2;
    asteroid.lifetime=500;

    asteroidGroup.add(asteroid);
  }
}