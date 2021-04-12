let array = [];
let bgColor = 200;
let noiseOffset = 0.0;
let strokeWidth =5

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(bgColor);
  strokeWeight(strokeWidth);
  // stroke(map(mouseX, 0, 600, 0, 255, true));
  noFill();

}

function draw() {
  background(200,10)
  strokeWeight(strokeWidth);

 noiseOffset += 0.05;
 strokeWidth = noise(noiseOffset)*100;


  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  }

}


function keyTyped() {

  if (key === 's') {
    //save this images
    saveCanvas('fileName', 'png');
} else if (key === 'c') {
  //clear image
  clear();
  background(200);
}

  return false;
}
