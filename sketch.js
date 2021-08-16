const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball,ball_2,ball_3,ball_4,ball_options; 
var con,con_2,con_3,con_4
var roof;

//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball);

    ball_2 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_2);

    ball_3 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_3);

    ball_4 = Bodies.circle(200,50,10,ball_options);
    World.add(world,ball_4);

    con = Matter.Constraint.create({
        pointA:{x:400,y:100},
        bodyB:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
    })

    con_2 = Matter.Constraint.create({
      pointA:{x:380,y:100},
      bodyB:ball,
      pointB:{x:0,y:0},
      length:100,
      stiffness:0.1
  })

   con_3 = Matter.Constraint.create({
    pointA:{x:340,y:100},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

  con_4 = Matter.Constraint.create({
    pointA:{x:320,y:100},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

   World.add(world, con)
   World.add(world, con_2)
   World.add(world, con_3)
   World.add(world, con_4)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y)
  line(con_2.pointA.x, con_2.pointA.y, ball_2.position.x, ball_2.position.y)
  line(con_3.pointA.x, con_3.pointA.y, ball_3.position.x, ball_3.position.y)  
  line(con_4.pointA.x, con_4.pointA.y, ball_4.position.x, ball_4.position.y) 
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,)

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball_4,{x:0,y:0},{x:0.05,y:0});
    }
}