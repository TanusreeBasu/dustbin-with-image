class Dustbin{
    constructor(x,y,width,height){
       
        var options={
            isStatic:true
        }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height=height;
     this.image = loadImage("images/dustbingreen.png");

        World.add(world,this.body);

     //   rect1 = Bodies.rectangle(this.x, this.y, this.dustbinWidth,this.dustbinHeight);
      //  World.add(world, this.rect1);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        fill("orange")
        image(this.image, pos.x,pos.y,this.width,this.height)
    }
}