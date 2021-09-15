function mousePressed(){
	bursts.push(new Burst(mouseX, mouseY));
  }

  function Burst(x, y){

  this.xpos = x;
  this.ypos = y;
  this.distance = random(25, 80);
  this.rad = random(15, 30);
  this.col = random(360);
  this.colSpeed = random(0.09, 0.06);

	
  this.display = function(){
	  for(var i = 0; i < 6; i++){
		  push();
		  translate(this.xpos, this.ypos);
		  rotate(frameCount * this.colSpeed + PI * i / 2);
		  fill(this.col + 5 * i, sin(frameCount * this.colSpeed) * 30 + 90, 150, 80);
		  ellipse(this.distance + sin(frameCount * this.colSpeed) * this.distance, 0, this.rad + 5 * i, this.rad + 5 * i);
		  pop();
	  }
	}
  }