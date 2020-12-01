class Box {

constructor(x,y,width,height){

var options = {
    restitution :0.4,
    friction :0.0
}
this.image = loadImage("Box.png")
this.Boxbody = Bodies.rectangle(x,y,width,height,options)
this.visibility = 255
this.width = width
this.height = height
World.add(world,this.Boxbody)
}

display(){

if (this.Boxbody.speed<3){
    var pos = this.Boxbody.position
    var angle = this.Boxbody.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("pink")
    rect(0,0,this.width,this.height)
    pop()
}
else{
    World.remove(world,this.Boxbody);
    push()
  tint(255,this.visibility)
  image(this.image,this.Boxbody.position.x,this.Boxbody.position.y,30,30)
  this.visibility = this.visibility -0.1
  pop()
}
}
score(){
if (this.visiblity<0 && this.visiblity>-1005){
score = score +1
}
}
}