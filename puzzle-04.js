function repeatDown(total) {
	var count = 0;
	while (count < total) {
		down();
		count = count + 1;
	}
}

function tetris() {
	up();
	right();
	var key = getColor();
	down();
	setColor(key);
	right();
	right();
}


repeatDown(5);
tetris();
tetris();
