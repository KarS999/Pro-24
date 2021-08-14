class Iron{
	constructor(x,y,w,h)
	{
	
		var options={
			restitution:0.8,
			friction:3,
			density:30
		}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{ 
			var ironpos=this.body.position;	
			var angle = this.body.angle;
			rect(this.x, this.y, this.w, this.h);	
			push()
			translate(ironpos.x, ironpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("black");
			pop()
	}

}