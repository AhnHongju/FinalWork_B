class Particle
  {
    constructor(size)
    {
      this.loc=createVector(width/2,height/2);
      this.vel=createVector(0,0);
      this.w=size;
  
      stroke(255,255,255,50);
      
    }
    
    update()
    {
      let acc=createVector(random(-1,1),random(-1,1));
      this.loc.add(this.vel);
      this.vel.add(acc);
    }
    display()
    {
      text("NATURE",this.loc.x,this.loc.y);
      fill(255);
      textSize(10);
    }
  }