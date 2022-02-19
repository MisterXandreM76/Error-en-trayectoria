class Bote{
 constructor(x,y){
  var options={
    isStatic:true
  }
this.w=40
this.h=40
this.body=Bodies.rectangle(x,y,this.w,this.h,options)
     this.BoteDeGuerra=loadImage("assets/boat.png")
     World.add(world,this.body)
  }

  show(){
   push();
   imageMode(CENTER);
   image(this.BoteDeGuerra,this.body.position.x,this.body.position.y,this.w,this.h)
   pop();


  }
}