const Engine = Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var bg,player,playerImg
var snow,ground

function preload(){
bg =loadImage("snow2.jpg")
playerImg =loadImage("steve.png")
}

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;

player = createSprite(400, 300, 50, 50);
player.addImage("p",playerImg)
player.scale =0.5
snow =new Snow(400,0,50)
ground =createSprite(400,610,800,400)
}

function draw() {
  background(bg);
  Engine.update(engine)
  drawSprites();

player.collide("ground")

if(keyDown("space")){
player.velocityY =-10

}
player.velocityY =player.velocityY + 0.5
snow.display()
}