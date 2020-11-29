class Box{

    //constructor automatically executes when we create object of the class
    //this keyword refers to the object 
    constructor(x,y,width,height){
        var options={
            restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        //capturing the angle
        var angle=this.body.angle;

        //push captures the new settings
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop(); //reverting the setting that you applied
    }
}