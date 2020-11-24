class box
{
    constructor(x,y,width,height)
    {
        var option={
            restitution:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
this.width=width;
this.height = height;
        World.add(world,this.body);
    }
    display()
    {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}