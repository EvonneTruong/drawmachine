function setup() {
  createCanvas(500, 500);
  background(220);
  strokeWeight(5);

}

function draw() {
// console.log(mouseIsPressed);

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 255, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
}
}

function keyTyped(){
  // console.log(`key s is being typed`)
  console.log(`key ${key} is being typed`)
  if (key === "s"){
    //save this images
    saveCanvas('fileName', 'png')
  }

  return false;
}
