class ground {
    constructor(x,y,w,h){



    
    var options={
    isStatic:true
   }
   this.width=w
   this.height=h
   this.body=Bodies.rectangle(x,y,w,h,options)
   World.add(world,this.body)

}
display(){
    var pos=this.body.position
    rectMode(CENTER)
    fill ("black")
    rect (pos.x,pos.y,this.width,this.height)
}
}