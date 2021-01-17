class Polygon{
    constructor(x,y,width,height) {
      var options = {
          restitution : 0.8,
          friction : 1.0,
          dencity : 1.0
      }
      this.body = Bodies.circle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      polygon_img = loadImage("polygon.png")
      World.add(world, this.body);
    
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX
      pos.y = mouseY
      var angle = this.body.angle;
      push();
      tranclate(pos.x, pos.y);
      rotate(angle);
      image(CENTER);
      image(polygon_img, pos.x, pos.y, 40,40);
      pop()
     
    }
  };
