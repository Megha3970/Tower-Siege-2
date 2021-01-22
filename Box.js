class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility = 225;
    }

    display()
    {
      console.log(this.body.speed);
      if(this.body.speed < 3)
      {
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        tint(255, this.visibility);
        pop();
      }
    }
  
  };
  