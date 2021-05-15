class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restution':0,
          'friction':1,
          'dencity':0.1

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width
      this.height = height 
      World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
    fill("white")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);

}
  };
   