const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
var canon1
var balls=[];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  //towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15
  //tower=Bodies.rectangle(160,350,160,310,{isStatic:true})
  //World.add(world,tower)
  //image(towerImage,160,350,160,310, {isStatic: true})
  
  canon1=new Cannon(180,110,130,100,angle)
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  

  canon1.deploy();

  for(var i=0; i<balls.length; i++){
    showbulletCanon(balls[i],i)
  }

}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    console.log("se presiona la tecla asia abajo")
    var bulletCanon
    bulletCanon=new CannonBall(canon1.x,canon1.y)
    bulletCanon.PuntosBlancos=[]
    console.log("Se genero la bala")

    balls.push(bulletCanon)
  }
}

function keyReleased(){
if (keyCode===DOWN_ARROW){
balls[balls.length-1].Killer();


}

}

function showbulletCanon(ball,index){
  if(ball){
    ball.deploy();
  }
}

