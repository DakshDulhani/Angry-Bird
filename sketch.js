const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling"
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground(800,800,1600,20);
    platform = new Ground(275,615,450,350)
    box1 = new Box(1000,720,70,70);
    box2 = new Box(1220,720,70,70);
    pig1 = new Pig(1110, 750);
    log1 = new Log(1110,660,300, PI/2);

    box3 = new Box(1000,640,70,70);
    box4 = new Box(1220,640,70,70);
    pig3 = new Pig(1110, 620);

    log3 =  new Log(1110,580,300, PI/2);

    box5 = new Box(1110,560,70,70);
    log4 = new Log(1060,520,150, PI/7);
    log5 = new Log(1170,520,150, -PI/7);

    bird = new Bird(100,100);
    slingShot = new Slingshot(bird.body,{x:328,y:275})
  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();
     
    box5.display();
    log4.display();
    log5.display();

    bird.display();
 platform.display();  
    slingShot.display()
}
function mouseDragged(){
    if(gameState==="onSling"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingShot.fly();
    gameState="launched"
}
function keyPressed(){
if(keyCode===32){
slingShot.attach(bird.body)  
gameState="onSling"  
}    
}