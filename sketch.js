let blocks = [];
let numberofblocks = 40;





function setup() {
  createCanvas(windowWidth, windowHeight);

for(let i = 0; i <= numberofblocks; i++){
  let x = i * 10;
  let y = i * 10;
  let speedX = 2;
  let speedY = 2;
  blocks[i] = new Block(x,y,speedX,speedY);
}

}






function draw(){
  background(0)
  for(i = 0; i<blocks.length; i++){
    blocks[i].move();
    blocks[i].show();
  }
}

class Block {

  constructor( x ,y,speedX,speedY){
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  }

 
  move(){
  
  this.x = this.x + this.speedX;
    if(this.x >= windowWidth || this.x<=0 ){
    this.speedX = (-1)*this.speedX;
  }
  this.y = this.y + this.speedY;
    if(this.y >= windowHeight || this.y<=0 ){
    this.speedY = (-1)*this.speedY 

}
  }

  
  
  
  show(){
    

    noFill();
stroke(175,185,265);
line(this.x, -1, -1, this.y);
line(-1,this.x, this.y,-1);
    
circle((windowWidth*.75),(windowHeight*.75),this.x);
    
curve(1000, 2000, this.x, windowHeight, windowWidth, this.x, 2000, 1000);

    
    noFill();
    stroke(255);
    bezier(windowWidth, windowWidth, 0, windowHeight, windowHeight, 0, 100, 0, 0, 0, 100, 0);
    bezier(windowHeight, 0, 0, 100, 100, 0, -windowHeight, 0, 0, 0, 100, 0);

  }
}