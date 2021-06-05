const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var count = 0;
var particle;
var line;
 
var gameState = "PLAY";


function setup() {
  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
 
 ground = new Ground(width/2, height, width, 20)
 for (var k = 0; k <=width; k = k + 50){
   divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
 }

 for (var j = 75; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

   for (var j = 50; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
  
 
}

function draw() {
  
  
   text("score:"+score,20,40);
   textSize(30);
   
  
   stroke("white");
  background("black");
  textSize(25)
  text("500",5,580);
  text("500",55,580);
  text("500",105,580);
  text("500",155,580);
  text("500",205,580);
  text("500",255,580);
  text("500",305,580);
  text("500",355,580);
  text("500",405,580);
  text("500",455,580);
  text("500",505,580);
  text("500",555,580);
  text("500",605,580);
  text("500",655,580);
  text("500",705,580);
  text("500",755,580);


 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
   score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
 
  ground.display();
  if(gameState == "END"){
     background("black");
     fill("red");
     textSize(180);
     text("Game Over",200,400);
  }
  for(var k = 0; k< plinkos.length; k++){
    plinkos[k].display();

  }
  if(particle!=null)
  {
    particle.display();
    if(particle.body.position.y>700)
    {
      if(particle.body.position.x<300)
      {
        score = score+500;
        particle = null;
        if(count>=5) gameState = "END";
      }
      else if (particle.body.position.x<600 && particle.body.position.x>301)
      {
        score = score+100;
        particle = null;
        if(count>=5) gameState = "END";

      }
      else if(particle.body.position.x <900 && particle.body.position.x > 601)
    
      
        {
         score = score+200;
         particle = null;
         if(count>=5) gameState = "END";
        }
      }
    }
  }
  for(var i = 0; i< divisions.length;i++){
    divisions[i].display();
  }
  function mousePressed(){
    if(gameState != "END"){
      count ++
      particle = new Particle(mouseX,50,10,10);
    }
  }