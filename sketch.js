let blocks = [];
let value = 1 ;
let numberofblocks = 0;
let circleColor = 0;
let lineColor = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //window.alert("this is my message");
  circleColor = random(255); 
  lineColor = random(255);
  rectMode(CENTER);


  for(let i = 0; i <= numberofblocks; i++){
    let x = i * 5;
    let y = i * 5;
    let speedX = 2;
    let speedY = 2;
    blocks[i] = new Block(x,y,speedX,speedY);
  
  }
  

}

function draw(){
  background(0);


  


  for(t = 0; t<blocks.length; t++){
    blocks[t].move();
    blocks[t].show();
  }

  if (frameCount % 60 == 0) {
  	circleColor = color(random(255), random(255), random(255));
  	lineColor = color(random(255), random(255), random(255));
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
stroke(lineColor);

line(this.x, -1, -1, this.y);
line(-1,this.x, this.y,-1);

line(-this.x, windowHeight, windowWidth, -this.y);
line(windowWidth,-this.x, -this.y,windowHeight);

line((windowWidth*.75), (windowHeight*.75), this.y,1);
line((windowWidth*.75), (windowHeight*.75), 1,this.x);

noFill();
stroke(circleColor);

circle((windowWidth*.75), (windowHeight*.75), this.y);
circle((windowWidth*.75), (windowHeight*.75), this.x);

  }
}

function mousePressed() {
    circleColor = color(random(255), random(255), random(255));
    lineColor = color(random(255), random(255), random(255));
    strokeWeight(random(3));
 }

function keyPressed(){
  if (keyCode === 65) {
    value = 20;
    numberofblocks = value ;

    for(let i = 0; i <= numberofblocks; i++){
      let x = i * 5;
      let y = i * 5;
      let speedX = 2;
      let speedY = 2;
      blocks[i] = new Block(x,y,speedX,speedY);
    }

  } else if (keyCode === 87){
    value = 20;
    numberofblocks = value ;

    for(let i = 0; i <= numberofblocks; i++){
      let x = i * 5;
      let y = i * 5;
      let speedX = 2;
      let speedY = 2;
      blocks[i] = new Block(x,y,speedX,speedY);
    }

  } else if (keyCode === 68){
    value = 30;
    numberofblocks = value ;

    for(let i = 0; i <= numberofblocks; i++){
      let x = i * 5;
      let y = i * 5;
      let speedX = 2;
      let speedY = 2;
      blocks[i] = new Block(x,y,speedX,speedY);
    }

  } else if (keyCode === 83){
    value = 40;
    numberofblocks = value ;
    for(let i = 0; i <= numberofblocks; i++){
      let x = i * 5;
      let y = i * 5;
      let speedX = 2;
      let speedY = 2;
      blocks[i] = new Block(x,y,speedX,speedY);
    }

  } 
}