class  Paper {
    constructor(x, y){

      var options={
        isStatic:false,
        restitution:0.3,
        friction:1.5,
        density:1.3
      }
      this.x=x;
     this.y=y; 
      this.body=Bodies.circle(this.x,this.y,options)
      World.add(world,this.body)

      display()
        var paperpos=this.paperpos.position; 
        
        push ();
        translate (paperpos.x,paperpos.y)
        rectMode(CENTER);
         fill (225,0);
        strokeWeight (3);
          pop()
    }
  }