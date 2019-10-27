var g, r, b, g2, r2, b2;
var color1, color2;
var rectSize = 7;
var z = 0;
var xlo, xhi, ylo, yhi, xdisp, ydisp;
var fontRegular, fontMedium, fontBold;
var canvas;
var animationOn = true;

const theme = "Noise";
const themeTop = "Thanks for coming to BWxD 2019";
const time = "We are currently building our BWxD family for 2020!";
const description = "We are currently building our BWxD family for 2020!";
const buttonTextOn = "Disable Animation";
const buttonTextOff = "Enable Animation";

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
  b = color(36, 31, 89);
  b2 = color(26, 22, 63);
  n = Math.floor(random(3));
  if (n == 0) {
    color1 = g2;
    color2 = g;
  } else if (n == 1) {
    color1 = r2;
    color2 = r;
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
  background(color1);

  // Background
  if (animationOn) {
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
  }
  z+= 0.03;
  fill(255, 255, 255);
  var halfWidth = windowWidth/2;
  if (windowWidth < 520) {
    textAlign(CENTER);
    textFont(fontMedium);
    textSize(20);
    text(themeTop, halfWidth, 70);
    textFont(fontBold);
    textSize(60);
    text(theme, halfWidth, 130);
    textFont(fontMedium);
    textSize(20);
    text(time, halfWidth, 165);
//    if (windowHeight > 400) {
//      textSize(14);
//      textAlign(LEFT);
//      text(description, halfWidth, 430, 280, 500);
//    }
    xlo = 100;
    xhi = 350;
    ylo = 150;
    yhi = 180;
  } else if (windowWidth < 620) {
    textAlign(CENTER);
    textFont(fontMedium);
    textSize(40);
    text(themeTop, halfWidth, 80);
    textFont(fontBold);
    textSize(90);
    text(theme, halfWidth, 180);
    textFont(fontMedium);
    textSize(26);
    text(time, halfWidth, 230);
//    if (windowHeight > 400) {
//      textSize(18);
//      textAlign(LEFT);
//      text(description, halfWidth, 450, 430, 400);
//    }
    xlo = int(windowWidth/4);
    xhi = int(windowWidth/1.2);
    ylo = 230;
    yhi = 290;
  } else if (windowWidth < 800) {
    textAlign(CENTER);
    textFont(fontMedium);
    textSize(50);
    text(themeTop, halfWidth, 100);
    textFont(fontBold);
    textSize(100);
    text(theme, halfWidth, 200);
    textFont(fontMedium);
    textSize(26);
    text(time, halfWidth, 250);
//    if (windowHeight > 400) {
//      textSize(20);
//      textAlign(LEFT);
//      text(description, halfWidth, 480, 520, 400);
//    }
    xlo = int(windowWidth/4);
    xhi = int(windowWidth/1.2);
    ylo = 240;
    yhi = 310;
  } else {
    textAlign(CENTER);
    textFont(fontMedium);
    textSize(53);
    text(themeTop, halfWidth, 120);
    textFont(fontBold);
    textSize(110);
    text(theme, halfWidth, 220);
    textFont(fontMedium);
    textSize(30);
    text(time, halfWidth, 270);
//    textSize(20);
//    textAlign(LEFT);
//    text(description, halfWidth, 495, 550, 400);
    xlo = int(windowWidth/3);
    xhi = int(windowWidth/1.5);
    ylo = 280;
    yhi = 350;
  }

  // Noise glitch
  if (animationOn) {
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
  }

  // Disable/Enable Animation Button
  textAlign(CENTER);
  stroke(255, 255, 255);
  if (windowWidth > 600) {
    strokeWeight(3);
    if (mouseX > (windowWidth-170) && mouseX < (windowWidth-70) && mouseY > (windowHeight-145) && mouseY < (windowHeight-95)) {
      fill(255, 255, 255, 50);
    } else {
      noFill();
    }
    strokeWeight(1);
    rect(windowWidth-120, windowHeight-122, 120, 50, 40);
    strokeWeight(0.7);
    fill(255, 255, 255);
    textSize(18);
    textFont(fontRegular);
    if (animationOn) {
      text(buttonTextOn, windowWidth-120, windowHeight-120, 100, 40);
    } else {
      text(buttonTextOff, windowWidth-120, windowHeight-120, 100, 40);    
    }
  } else {
    strokeWeight(2);
    if (mouseX > (windowWidth-150) && mouseX < (windowWidth-90) && mouseY > (windowHeight-125) && mouseY < (windowHeight-85)) {
      fill(255, 255, 255, 50);
    } else {
      noFill();
    }
    strokeWeight(1);
    rect(windowWidth-50, windowHeight-112, 80, 40, 40);
    strokeWeight(0.3);
    fill(255, 255, 255);
    textSize(14);
    textFont(fontRegular);
    if (animationOn) {
      text(buttonTextOn, windowWidth-50, windowHeight-105, 60, 40);
    } else {
      text(buttonTextOff, windowWidth-50, windowHeight-105, 60, 40);    
    }    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (windowWidth > 600 && mouseX > (windowWidth-170) && mouseX < (windowWidth-70) && mouseY > (windowHeight-145) && mouseY < (windowHeight-95)) {
    animationOn = !animationOn;
  } else if (windowWidth <= 600 && mouseX > (windowWidth-100) && mouseX < (windowWidth-20) && mouseY > (windowHeight-145) && mouseY < (windowHeight-95)){
    animationOn = !animationOn;
  } else {
    g = color(0, 180, 172);
    g2 = color(0, 129, 123);
    r = color(238, 64, 61);
    r2 = color(175, 47, 44);
    b = color(36, 31, 89);
    b2 = color(26, 22, 63);
    var newN = Math.floor(random(3));
    if (newN == n) {
      newN = (newN + 1) % 3;
    }
    n = newN;
    if (n == 0) {
      color1 = g2;
      color2 = g;
    } else if (n == 1) {
      color1 = r2;
      color2 = r;
    } else {
      color1 = b2;
      color2 = b;
    }
  }
}
