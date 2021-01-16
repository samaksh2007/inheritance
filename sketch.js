const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,object
var box1,box2,box3,box4,box5,logs1,logs2,logs3,logs4,birds1,pig1,pig2
function setup () {
createCanvas(1200,400)
engine=Engine.create()
world=engine.world
object=new ground(600,380,1200,40)
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
box5=new Box(810,160,70,70)
pig1=new pig(810,350,50,50)
pig2=new pig(810,220,50,50)
logs1=new logs(810,260,300,PI/2)
logs2=new logs(810,180,300,PI/2)
logs3=new logs(760,120,150,PI/7)
logs4=new logs(870,120,150,-PI/7)
birds1=new birds(50,50)
}

 function draw () {
     background("black")
     Engine.update(engine)
     box1.display()
     box2.display()
     box3.display()
     box4.display()
     box5.display()
     pig1.display()
     pig2.display()
     logs1.display()
     logs2.display()
     logs3.display()
     logs4.display()
    birds1.display()
     object.display()

 }