function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
}
