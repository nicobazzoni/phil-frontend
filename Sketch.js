
// function setup(){
// loadJSON("http://localhost:3000/philosophers", gotData, jsonp)
// }
let angle = 0;
var drawing = []
var bursts = [];
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB, 100);
	
  fill(100, 20)
 

  
}

var saveButton = select('#saveButton');
saveButton.mousePressed(saveDrawing);



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