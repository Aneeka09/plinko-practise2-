const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinko,particles;
var division,ground;
var divisions=[]
var divisionHeight=300;
var plinkos=[]
var particles=[]







function setup() {
  createCanvas(800,800);
 engine=Engine.create();
 world=engine.world;
 ground = new Ground(400,height,800,20);
 platform = new Ground(150, 305, 300, 170);

for(var i=0;i<=width;i=i+80){
  divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight))
}

for(var i=75;i<width-100;i=i+70){
  plinkos.push(new Plinko(i,75))
}
for(var i=75;i<width-100;i=i+70){
  plinkos.push(new Plinko(i,185))
}
for(var i=75;i<width-100;i=i+70){
  plinkos.push(new Plinko(i,275))
}
for(var i=75;i<width-100;i=i+70){
  plinkos.push(new Plinko(i,405))
}


}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }
  if(frameCount%60===0){
  particles.push(new Particle(random(width/2-50,width/2+10),10));
 }
  for(var i=0;i<particles.length;i++){
  particles[i].display();
  }
}
  