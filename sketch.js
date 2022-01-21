function setup() {
    createCanvas(windowWidth, windowHeight);
  }

strokeSize = 1;
i = 1;
console.log("print to console");


  function draw() {
    background(255);

    // Bronze thin lines
    stroke(100, 100, 0);
    strokeWeight(strokeSize);
    while (i <= 4) {
      line(windowWidth, 0, 0, i * windowHeight/4);
      i = i + 1;
    }
    i = 3;
    while (i >= 1) {
      line(windowWidth, 0, i * windowWidth/4, windowHeight);
      i = i - 1;
    }

    // Blue thick lines
    strokeSize = strokeSize + 2;
    stroke(0, 0, 200);
    strokeWeight(strokeSize);
    i = 1;
    while (i <= 7) {
      line(0, i * windowHeight/4, i * windowWidth/4, 0);
      i++;
    }

    // Black, very thick lines
    strokeSize = strokeSize + 2;
    stroke(0, 0, 0);
    strokeWeight(strokeSize);
    i = 1;
    while (i <= 7) {
      line(i * windowWidth/8, 0, i * windowWidth/8, windowHeight);
      i++;
    }
    strokeSize = 1;
    i = 1;
  }