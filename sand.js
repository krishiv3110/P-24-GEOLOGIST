 class Sand{
   
            constructor(x,y,radius){
                var options = {

                    restitution:0.5,
                    friction:5,
                    density:1
                }
                
          
            this.body = Bodies.circle(x, y, radius, options);
                
                this.radius = radius*2;
        
                
                World.add(world, this.body);
          }
            
          display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
           // rect(0, 0, this.width, this.height);
           circle(0,0,this.radius)
            pop();
          }
          
          }
          //this.options,this.maxSides
  

