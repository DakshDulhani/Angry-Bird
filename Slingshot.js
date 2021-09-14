class Slingshot {
    constructor(bodyA,pointB) {
      var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      this.image1 = loadImage("sprites/sling1.png")
      this.image2 = loadImage("sprites/sling2.png")
      this.image3 = loadImage("sprites/sling3.png")
      this.pointB=pointB
      this.sling = Constraint.create(options)
      World.add(world, this.sling);
    }
    attach(body){
    this.sling.bodyA=body  
    }
    fly(){
    this.sling.bodyA=null ;   
    }
    display(){
    image(this.image1,300,245)
    image(this.image2,270,245)
      if(this.sling.bodyA){
var pointA=this.sling.bodyA.position;
var pointB=this.pointB
stroke(48,22,8)
strokeWeight(10)
line(pointA.x,pointA.y,pointB.x,pointB.y) 
line(pointA.x,pointA.y,pointB.x - 43,pointB.y+3)
      }
    }
  };
