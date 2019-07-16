var g, r, y, b, g2, r2, y2, b2;
var color1, color2;
var rectSize = 7;
var z = 0;
var xlo, xhi, ylo, yhi, xdisp, ydisp;
var fontRegular, fontMedium, fontBold;
var canvas;

const theme = "Noise";
const themeTop = "Welcome to BWxD 2019";
const description = "Noise disrupts dominant wavelengths. While this disturbance is often considered negative, we have chosen Noise as this year’s theme as an opportunity to embrace imperfection while challenging distortion. Through auditory, visual and physical forms of noise, we consider how design and social practices can create major shock waves that disrupt traditional methods and generate new ideas.";

function preload() {
  fontRegular = loadFont('styles/fonts/Calibre-Regular.otf');
  fontMedium = loadFont('styles/fonts/Calibre-Medium.otf');
  fontBold = loadFont('styles/fonts/Calibre-Bold.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  frameRate(10);
  g = color(0, 180, 172);
  g2 = color(0, 129, 123);
  r = color(238, 64, 61);
  r2 = color(175, 47, 44);
  y = color(255, 211, 0);
  y2 = color(255, 171, 0);
  b = color(36, 31, 89);
  b2 = color(26, 22, 63);
  n = Math.floor(random(4));
  if (n == 0) {
    color1 = g2;
    color2 = g;
  } else if (n == 1) {
    color1 = r2;
    color2 = r;
  } else if (n == 2) {
    color1 = y2;
    color2 = y;
  } else {
    color1 = b2;
    color2 = b;
  }
  textAlign(CENTER);
  rectMode(CENTER);
  loadPixels();
}

function draw() {
  noStroke();
  for (var x = 0; x < width; x+=rectSize) {
    var l = lerp(0.3, 0.7, (windowWidth-mouseX)*2*x/windowWidth/windowWidth);
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
  var halfWidth = windowWidth/2;
  if (windowWidth < 520) {
    textFont(fontMedium);
    textSize(30);
    text(themeTop, halfWidth, 80);
    textFont(fontBold);
    textSize(70);
    text(theme, halfWidth, 150);
    if (windowHeight > 400) {
      textFont(fontMedium);
      textSize(15);
      text(description, halfWidth, 430, 280, 500);
    }
    xlo = 100;
    xhi = 350;
    ylo = 160;
    yhi = 200;
  } else if (windowWidth < 620) {
    textFont(fontMedium);
    textSize(40);
    text(themeTop, halfWidth, 100);
    textFont(fontBold);
    textSize(90);
    text(theme, halfWidth, 200);
    if (windowHeight > 400) {
        textFont(fontMedium);
        textSize(18);
        text(description, halfWidth, 460, 430, 400);
    }
    xlo = int(windowWidth/4);
    xhi = int(windowWidth/1.2);
    ylo = 240;
    yhi = 300;
  } else if (windowWidth < 800) {
    textFont(fontMedium);
    textSize(50);
    text(themeTop, halfWidth, 120);
    textFont(fontBold);
    textSize(100);
    text(theme, halfWidth, 220);
    if (windowHeight > 400) {
      textFont(fontMedium);
      textSize(20);
      text(description, halfWidth, 460, 520, 400);
    }
    xlo = int(windowWidth/4);
    xhi = int(windowWidth/1.2);
    ylo = 260;
    yhi = 330;
  } else {
    textFont(fontMedium);
    textSize(53);
    text(themeTop, halfWidth, 140);
    textFont(fontBold);
    textSize(110);
    text(theme, halfWidth, 240);
    textFont(fontMedium);
    textSize(20);
    text(description, halfWidth, 480, 550, 400);
    xlo = int(windowWidth/3);
    xhi = int(windowWidth/1.5);
    ylo = 280;
    yhi = 350;
  }

  if (random() > 0.6) {
    loadPixels();
    xdisp = int(random(10))*20;
    ydisp = int(random(windowHeight/5));
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
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  g = color(0, 180, 172);
  g2 = color(0, 129, 123);
  r = color(238, 64, 61);
  r2 = color(175, 47, 44);
  y = color(255, 211, 0);
  y2 = color(255, 171, 0);
  b = color(36, 31, 89);
  b2 = color(26, 22, 63);
  var newN = Math.floor(random(4));
  if (newN == n) {
    newN = (newN + 1) % 4;
  }
  n = newN;
  if (n == 0) {
    color1 = g2;
    color2 = g;
  } else if (n == 1) {
    color1 = r2;
    color2 = r;
  } else if (n == 2) {
    color1 = y2;
    color2 = y;
  } else {
    color1 = b2;
    color2 = b;
  } 
}
