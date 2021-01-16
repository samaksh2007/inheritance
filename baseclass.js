class baseclass{
    constructor(x,y,w,h,angle){
        var options={
            friction:1,
            density:1.0,
            restitution:1.0
        }
        this.width=50
        this.height=50
        this.image=loadImage("sprites/base.png")
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
        display(){
            var pos=this.body.position
            pos.x=mouseX
            pos.y=mouseY
            var angle=this.body.angle
            push ()
            translate(pos.x,pos.y)
            rotate (angle)
            imageMode(CENTER)
            image (this.image,0,0,this.width,this.height)
            pop ()        
        }
}
    
