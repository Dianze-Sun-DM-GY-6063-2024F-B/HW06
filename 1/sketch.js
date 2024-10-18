// TODO: add more circles using lists

let ypos0;
let ypos1;
let ypos2;

let ypos = [-50,-50,-50];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  ypos0 = -50;
  ypos1 = -50;
  ypos2 = -50;
}

function draw() {
  background(120, 150, 220);
  ellipse(width / 2 - 100, ypos0, 50);
  ellipse(width / 2, ypos1, 50);
  ellipse(width / 2 + 100, ypos2, 50);

  ypos0 += 8;
  ypos1 += 11;
  ypos2 += 17;

  if (ypos0 > height) {
    ypos0 = -50;
  }

  if (ypos1 > height) {
    ypos1 = -50;
  }

  if (ypos2 > height) {
    ypos2 = -50;
  }









}