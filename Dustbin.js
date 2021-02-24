class dust{
    constructor(x,y,width,height){
    
     var options= {
    
        
        'restitution':0.8,
    'friction':1.5,
    'density':1.0
     
    
        }
        var options2= {
    
        
            isStatic:true
         
        
            }
        

            
        
    this .body= Bodies.rectangle(x,y,width,height,options,options2)
    this.width= width
    this.height= height
    World .add(world, this.body)
    }
    
    display(){
    var pos= this .body.position 
    var angle = this.body.angle
    
    push ()
    translate(pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("grey")
    rect(0,0,this.width,this.height)
    
    pop ()
    }
    
    }