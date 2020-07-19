class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        ecllipse(this.position.x,this.position.y,radius,radius);
    }
}