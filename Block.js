class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
        
      }
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
        var pos= this.body.position;
        var angle= this.body.angle;
      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
        push();
        translate(pos.x, pos.y);
        rotate(angle);

     
      //tint(225,this.visibility);
      image(this.image,0,0,50,50);
      pop();
        
      }
      else {
       
        World.remove(world, this.body);
        push(); 
        this.visibility= this.visibility-5;
         pop();
      }
    }
}






