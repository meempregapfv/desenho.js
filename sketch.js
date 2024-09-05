function setup() {
  createCanvas(400, 400);
  background("#8BC34A");
}

function draw() {
  if (mouseIsPressed) {
  stroke("purple"); //comando para alterar a cor da linha
  fill("#8BC34A"); //comano para preencher
  rect(mouseX, mouseY,30,30);
  }
}
