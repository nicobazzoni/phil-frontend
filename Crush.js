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