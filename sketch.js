//creating the variables for sprites
var bow , arrow,  background, redB, pinkB, greenB ,blueB 
//creating the variable for balloon groups
var arrowGroup,redBGroup,blueBGroup,greenBGroup,pinkBGroup;
//creating the variable for images of the sprites
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  //pre-loading the image of the background
  backgroundImage = loadImage("background0.png");
  //pre-loading the images of arrow and balloons
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  //creating the canvass of length=600 and width=600
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  //adding the image to the sprite
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  //creating the groups
  redBGroup = new Group();
  blueBGroup = new Group();
  greenBGroup = new Group();
  pinkBGroup = new Group ();
  arrowGroup = new Group();
  //setting the value of the score to 0
  score = 0  
 
}

function draw() {

  // moving the background
  background.velocityX = -3 
  // making the background move infinately 
  if (background.x < 0){
    background.x = background.width/2;
  }
  
  //moving the bow on the Y axis on the basis of the the mouse input 
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
   }
  
  //creating continous movement of balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
// Writing the the if statements to destory the arrow and the balloon group when touching each other and adding the score   
  if(arrowGroup.isTouching(redBGroup)){
    redBGroup.destroyEach();
    arrowGroup.destroyEach();
    score  = score+1;
  }
    
  if(arrowGroup.isTouching(blueBGroup)){
    blueBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  
  if(arrowGroup.isTouching(greenBGroup)){
    greenBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  
  if(arrowGroup.isTouching(pinkBGroup)){
    pinkBGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
    
  }
  //drawing the sprites multiple times
  drawSprites();
  // displaying the score
  textSize(20);
    text("Score: "+ score, 500,50);
}

//writing the functions for each balloons and arrow
function redBalloon() {
  //chosing a random number
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  //adding the image
  red.addImage(red_balloonImage);
  //giving the velociy
  red.velocityX = 3;
  //giving the life time 
  red.lifetime = 185;
  red.scale = 0.1;
  //adding the ballons to the groups
  redBGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 185;
  blue.scale = 0.1;
  blueBGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 185;
  green.scale = 0.1;
  greenBGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 185;
  pink.scale = 1
  pinkBGroup.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  //setting the collider length and width 
  arrow.setCollider("rectangle",0,0,10,10);
  arrow.debug=false;
  arrowGroup.add(arrow);
}
