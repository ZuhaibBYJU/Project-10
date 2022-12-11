var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  shipImg1 = loadAnimation("boeing-737-next-generation-11549902172dvlqcrbse0.png","My Project.png","boeing-737-next-generation-11549902172dvlqcrbse0.png","My Project.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(500,500);
  background("blue");

  // Moving background
  sea=createSprite(500,250);
  sea.addImage(seaImg);
  sea.velocityX = -9;
  sea.scale=0.3;

  
  ship = createSprite(300,200,30,20);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.3;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

 
  drawSprites();
}