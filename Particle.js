class Particle
  {
    constructor(size)
    {
      this.loc=createVector(width/2,height/2);
      this.vel=createVector(0,0);
      stroke(255,255,255,50);

    }

    update()
    {
      textAlign(CENTER);
      let acc=createVector(random(-0.3,0.3),random(-0.3,0.3));
      this.loc.add(this.vel);
      this.vel.add(acc);
      if(this.loc.x>width||this.loc.x<0)
      {
        this.vel.x*=-1;
      }
      if(this.loc.y>height||this.loc.y<0)
      {
        this.vel.y*=-1;
      }
      // this.loc=createVector(random(0,width),random(0,height))
    }
    display()
    {
      noStroke();
      text("NATURE",this.loc.x,this.loc.y);
      textSize(20);
    }
  }
