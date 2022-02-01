function setup() {
    createCanvas(windowWidth,windowHeight);
    randomSeed(3);
    for (let x = 0; x < 255; x++) {

    }
    
}

function draw() {
    background(0);
    nofill();
    stroke(255);




    beginShape();
    for (let i = 0; i < windowWidth; i++) {
        let y = windowHeight * random(0,1);
        console.log(y)
        vertex(i,y);

    }
    endShape();





beginShape();
for (let i = 0; i <windowWidth; i++) {
    var nx = map(i,0,windowWidth,0,10);
    var y = windowHeight * noise(nx);
    vertex(i,y);

}
endShape();




r = noise(clr+100)*255;
g = noise(clr-50)*255;
b = noise(clr)*255;

fill(r,g,b);
//rect(windowWidth/2, windowHeight/2, 100, 100);

clr = clr + 0.05;



}
