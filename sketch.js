var g, r, y, b, g2, r2, y2, b2;
var color1, color2;
var rectSize = 6;
var z = 0;
var xlo, xhi, ylo, yhi, xdisp, ydisp;

var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  frameRate(10);
  g = color(0, 178, 178);
  g2 = color(0, 224, 224);
  r = color(238, 65, 66);
  r2 = color(247, 84, 85);
  y = color(255, 178, 0);
  y2 = color(255, 211, 0);
  b = color(36, 31, 89);
  b2 = color(65, 55, 168);
  n = Math.floor(random(4));
  if (n == 0) {
    color1 = g;
    color2 = g2;
  } else if (n == 1) {
    color1 = r;
    color2 = r2;
  } else if (n == 2) {
    color1 = y;
    color2 = y2;
  } else {
    color1 = b;
    color2 = b2;
  }
  textAlign(CENTER);
  loadPixels();
}

function draw() {
  noStroke();
  for (var x = 0; x < width; x+=rectSize) {
    var l = lerp(0.2, 0.8, x/windowWidth);
		for (var y = 0; y < height; y+=rectSize) {
			var c = noise(0.03 * x, 0.3 * y, z);
			if (c > l) {
        fill(color1);
      } else {
        fill(color2);
      }
			rect(x, y, rectSize, rectSize);
		}		
  }
  z+= 0.03;
  fill(255, 255, 255);
  textSize(windowWidth/20);
  text("Welcome to BWxD 2019", windowWidth/2, windowHeight/2.5);
  textSize(windowWidth/10);
  text("Noise", windowWidth/2, windowHeight/1.8);
  
  xlo = int(windowWidth/3);
  xhi = int(windowWidth/1.5);
  ylo = int(windowHeight/1.2);
  yhi = int(windowHeight/1.1);
  
  if (random() > 0.6) {
    loadPixels();
    xdisp = int(random(10))*20;
    ydisp = int(random(windowHeight/5));
    xlo = int(windowWidth/3);
    xhi = int(windowWidth/1.5);
    ylo = int(windowHeight/1.2);
    yhi = int(windowHeight/1.1);
    for (var y = ylo + ydisp; y < yhi + ydisp; y += 1) {
      for (var x = xlo; x < xhi; x += 1) {
        for (var i = 0; i < 8; i++) {
          var index = (y*windowWidth+x)*8+i;
          pixels[index] = pixels[index+xdisp];
        }
      }
    }
    updatePixels();
  }
  
  if (random() > 0.6) {
    loadPixels();
    xdisp = int(random(10))*20;
    ydisp = int(random(windowHeight/5));
    xlo = int(windowWidth/3);
    xhi = int(windowWidth/1.5);
    ylo = int(windowHeight/1.2);
    yhi = int(windowHeight/1.1);
    for (var y = ylo + ydisp; y < yhi + ydisp; y += 1) {
      for (var x = xhi; x > xlo; x -= 1) {
        for (var i = 0; i < 8; i++) {
          var index = (y*windowWidth+x)*8+i;
          pixels[index] = pixels[index-xdisp];
        }
      }
    }
    updatePixels();
  }
}

function windowResized() {
  console.log("resize");
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  console.log(mouseX, mouseY);
}