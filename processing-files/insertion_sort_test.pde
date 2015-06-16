int sx=500;
int sy=500;

int circleX, circleY;  // Position of circle button
int circleSize = 30;   // Diameter of circle
color circleColor, baseColor;
color rectHighlight, circleHighlight;
color currentColor;
boolean circleOver = false;

int step = 0;

int[] numbers = {
  210, 85, 175, 250, 30, 120, 0, 10, 150, 255, 199, 100
};
int[] onestepsorted;

void setup() {
  size(500, 500);
  background(235);
  
  circleColor = color(255);
  circleHighlight = color(204);
  baseColor = color(102);
  currentColor = baseColor;
  circleX = 30;
  circleY = 30;
  ellipseMode(CENTER);
}

void draw() { 
  update(mouseX, mouseY);
  sortingUpdate(step);
  
  for (int x = 0; x<numbers.length; x++) { 
    fill(numbers[x]);
    rect(0+x*(sx/numbers.length), 0, (sx/numbers.length), sy);
  }
  
  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  stroke(50);
  ellipse(circleX, circleY, circleSize, circleSize);
  
}

int[] sortOneStep(int[] a, int step) {
  int j = step;
  int keyy = a[j];
  int i = j-1;
  while (i>=0 && a[i]>keyy) {
    a[i+1]=a[i];
    i = i-1;
  }
  a[i+1]=keyy;

  return a;
}

int[] insertionSort(int[] a) {
  //println(a);
  for (int j=1; j < a.length; j++) {
    int keyy = a[j];
    int i = j-1;
    while (i>=0 && a[i]>keyy) {
      a[i+1]=a[i];
      i = i-1;
    }
    a[i+1]=keyy;
  }

  return a;
}

int[] invertedSort(int[] a) {
  for (int j=a.length-2; j >= 0; j--) {
    int keyy = a[j];
    int i = j+1;
    while (i<a.length && a[i]>keyy) {
      a[i-1]=a[i];
      i=i+1;
    }
    a[i-1]=keyy;
  }
  return a;
}


void update(int x, int y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
  } else {
    circleOver = false;
  }
}

void sortingUpdate(int j){
  if (circleOver && j>0 && j<numbers.length) {
    onestepsorted = sortOneStep(numbers, j);
  }
}


void mousePressed() {
  if (circleOver) {
    step++;
  }
}

boolean overCircle(int x, int y, int diameter) {
  float disX = x - mouseX;
  float disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}

