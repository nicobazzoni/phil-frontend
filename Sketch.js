
// function setup(){
// loadJSON("http://localhost:3000/philosophers", gotData, jsonp)
// }
let angle = 0;
var drawing = []
var bursts = [];


function setup() {
	const myCanvas = createCanvas(600, 600);
	myCanvas.parent("sketch")
	colorMode(HSB, 100);
	
  fill(100, 20)
 

  
}


function draw() {
	// Draw only when mouse is pressed
	if (mouseIsPressed === true) {
	  angle += 5;
	  let val = cos(radians(angle)) * 12.0;
	  for (let a = 10; a < 250; a += 50) {
		let xoff = cos(radians(a)) * val;
		let yoff = sin(radians(a)) * val;
		fill(0);
		ellipse(mouseX + xoff, mouseY + yoff, val, val);
	  }
	  fill(200);
	  ellipse(mouseX, mouseY, 5, 2);
	}
}


function saveDrawing() {
	var ref = database.ref('drawings');
	var data = {
	  name: 'Dan',
	  drawing: drawing
	};
	var result = ref.push(data, dataSent);
	console.log(result.key);
  
	function dataSent(err, status) {
	  console.log(status);
	}
  }