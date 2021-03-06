const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, polygon;


function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;


  ball = new Polygon(100, 300, 30);
  sling = new Sling(ball.body,{x:250, y:280});

  // TOWER1
  ground = new Ground(620,550,220,10);
  // layer1
  block1 = new Box(540,517,20,50);
  block2 = new Box(560,517,20,50);
  block3 = new Box(580,517,20,50);
  block4 = new Box(600,517,20,50);
  block5 = new Box(620,517,20,50);
  block6 = new Box(640,517,20,50);
  block7 = new Box(660,517,20,50);  
  // layer2
  block10 = new Box(560,465,20,50);
  block11 = new Box(580,465,20,50);
  block12 = new Box(600,465,20,50);
  block13 = new Box(620,465,20,50);
  block14 = new Box(640,465,20,50);
  // layer3
  block17 = new Box(580,413,20,50);
  block18 = new Box(600,413,20,50);
  block19 = new Box(620,413,20,50);
  // layer4
  block22 = new Box(600,360,20,50);

  //TOWER2
  ground1 = new Ground(950,400,200,10);
  //layer1
  block26 = new Box(890,360,20,50);
  block27 = new Box(910,360,20,50);
  block28 = new Box(930,360,20,50);
  block29 = new Box(950,360,20,50);
  block30 = new Box(970,360,20,50);
  //layer2
  block31 = new Box(910,320,20,50);
  block32 = new Box(930,320,20,50);
  block33 = new Box(950,320,20,50);
  //layer3
  block34 = new Box(930,290,20,50);

}

function draw() {
  background(255,255,255);    
  Engine.update(engine);

  ball.display();
  sling.display();

  fill("black");
  textSize(20);
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCK!!!!", 430,100);
  text("PRESS SPACE TO PLAY AGAIN!!", 430,130);

  //TOWER1
  ground.display();
  block1.display("blue","black");
  block2.display("blue","black");
  block3.display("blue","black");
  block4.display("blue","black");
  block5.display("blue","black");
  block6.display("blue","black");
  block7.display("blue","black");
  block10.display("red","black");
  block11.display("red","black");
  block12.display("red","black");
  block13.display("red","black");
  block14.display("red","black");
  block17.display("green","black");
  block18.display("green","black");
  block19.display("green","black");
  block22.display("yellow","black");

  //TOWER2
  ground1.display();
  block26.display("violet","black");
  block27.display("violet","black");
  block28.display("violet","black");
  block29.display("violet","black");
  block30.display("violet","black");
  block31.display("yellow","black");
  block32.display("yellow","black");
  block33.display("yellow","black");
  block34.display("cyan","black");
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(ball.body,{x:100, y:100});
    sling.attach(ball.body);
  }
}