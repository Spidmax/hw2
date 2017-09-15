right();

if (getColor() == "red") {
	up();
	up();
	up();
	direction = 0;
}
else {
	down();
	down();
	down();
	direction = 1;
}

if (getColor() == "red") {
	left();
}
else {
	right();
}

if (direction == 0) {
	up();
}
else {
	down();
}
