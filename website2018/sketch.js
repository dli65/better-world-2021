var vertexAmount;
var noiseScale, noiseValue;
var i, n;
var counter,c;
var g, r, y, b;
var color1, color2;

var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');

  noiseScale = windowWidth;
  g = color(0, 178, 178);
  r = color(238, 65, 66);
  y = color(255, 211, 0);
  b = color(36, 31, 89);
  n = Math.floor(random(1, 5));
  if (n == 1) {
    color1 = g;
    color2 = r
  } else if (n == 2) {
    color1 = r;
    color2 = g
  } else if (n == 3) {
    color1 = b;
    color2 = y
  } else {
    color1 = y;
    color2 = b
  };
  vertexAmount = random(2, 15);
}

function draw() {
  background(color1);
  fill(color2);
  noStroke();
  beginShape();
  vertex(0, 0);
  vertex(0, 0);
  vertex(width / 2, 0);
   vertex(width / 2, 0);
  i = 1;
  curveTightness(abs(map(mouseX, width, 0, 1, -1)));
  for (i; i <= vertexAmount ; i++) {
    curveTightness(vertexAmount/15);
    noiseValue = noise(i * 2 + (frameCount + mouseX / 3) / 50) * noiseScale;
    curveVertex(noiseValue, i * height / vertexAmount);
  }
  vertex(width / 2, height);
  vertex(width / 2, height);
  vertex(0, height);
  vertex(0, height);
  endShape();
}

function windowResized() {
  console.log("resize");
  resizeCanvas(windowWidth, windowHeight);
}