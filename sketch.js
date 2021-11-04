const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var object;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create(); //Se crea motor fisico 
  world = engine.world;//Nombramos el mundo usando el motor fisico 
  var object_options = {
    isStatic : true
  }
  //Hacer un objeto en este muendo usando BODIES 
  object = Bodies.rectangle(200,100,50,50,object_options);
  //Agregar cuerpo al mundo 
  World.add(world,object);
  //Mostar objeto en consola
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
}