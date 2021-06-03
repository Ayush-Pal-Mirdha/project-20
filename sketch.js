var car;

var wall;

var speeed;

var weight;

function setup() {
  createCanvas(1600, 1600);
  wall = createSprite(700,400,40,40);
  speed = random(55,90);
  weight = random(400,1500)
  car = createSprite(100,400,50,50);
  car.velocityX = speed;
}

function draw() {
  background(220);

  if(wall.x-car.x < (car.width+wall.width)/2){
    car .velocityX=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColour=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

    
  drawSprites();
}