
function setup(){
loadJSON("http://localhost:3000/philosophers", gotData, jsonp)
}


var bursts = [];
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB, 360, 100, 100, 100);
	
  }

  function draw() {
	background(0, 15);
	
	for(var i = 0; i < bursts.length; i++){
	  bursts[i].display();
	}
  }

  