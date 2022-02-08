function setup() {
    createCanvas(windowWidth,windowHeight);
    randomSeed(3);
    
    
}



function draw() {
    background(0);
    for (let x = 0; x < 255; x++) {

    }
let clr = 0.05;
let r = noise(clr+100)*255;
let g = noise(clr-50)*255;
let b = noise(clr)*255;


fill(r,g,b);
rect(mouseX, mouseY, mouseX, mouseY);

clr = clr + 1;


    //nofill();
    //stroke(255);



/*
    beginShape();
    for (let i = 0; i < windowWidth; i++) {
        let y = windowHeight * random(0,1);
        console.log(y)
        vertex(i,y);

    }
    endShape();

*/


/*
beginShape();
for (let i = 0; i <windowWidth; i++) {
    var nx = map(i,0,windowWidth,0,10);
    var y = windowHeight * noise(nx);
    vertex(i,y);

}
endShape();

*/

}