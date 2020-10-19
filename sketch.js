var car, wall;
var speed, weight;
function setup() {
  createCanvas(600,600);
  speed = random(55, 200);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(550, 200, 40, height/2);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22509;
if(deformation<80){
  car.shapeColor = "green";
}
if(deformation>80 && deformation<180){
  car.shapeColor = "yellow";
}
if(deformation>180){
  car.shapeColor = "red";
}
  }
  drawSprites();
}