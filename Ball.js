class Ball{
    constructor(x,y,width,height){
        var Boptions={
    
            'restitution':0.8,
   'friction':1.5,
  'density':1.2
            
        }
    
      this.body= Bodies.rectangle(x,y,width,height,Boptions)
     
     this.width = width
     this.height = height
     
      World.add(world,this.body)
    }
    display(){
    
    var pos= this.body.position
    rectMode(CENTER)
    push ()
    fill ("purple")
    rect(pos.x,pos.y,this.width,this.height)
    
    pop ()
    }
    
    }