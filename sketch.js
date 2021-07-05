var pathImg;
var path,jake;
var jakeImg;
var leftborder;
var rightborder;

function preload(){
 
pathImg= loadImage("path.png");
jakeImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.y = path.height/2;
  path.velocityY = 4;
  path.scale=1.2;

  jake=createSprite(200,200);
  jake.addAnimation("jake",jakeImg);

  leftborder = createSprite(45,10,5,800);
  leftborder.visible=false;
  rightborder = createSprite(360,10,5,800);
  rightborder.visible=false;
}


function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
console.log(jake.x);

  jake.x=World.mouseX;

  jake.collide(leftborder);
  jake.collide(rightborder);

 drawSprites();
}