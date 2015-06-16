void setup() {
   	size(500,500);
	background(255);
	noStroke();
	for(int i=0; i<5; i++){
	    for(int j=0; j<5; j++){
	      fill(i*30+j*40);
	      ellipse((100*j+50),(100*i+50),100,100);
	  }
	}
}
