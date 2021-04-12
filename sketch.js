let array = [];

function setup() {
  createCanvas(500, 500);
  background(220);
  strokeWeight(5);
  // stroke(map(mouseX, 0, 600, 0, 255, true));
  noFill();

}

function draw() {

  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
background(0);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === "s") {
    //save this images
    saveCanvas('fileName', 'png');
  } else if (key === "d") {
    //displa;y images
    background(220);

beginShape();
for(let i = 0; i < array.length; i++){
  console.log(i);
  // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex(array[i][0], array[i][1])
}
endShape();
  }

  return false;
}
