var colors = [];

steps = 0;
while (steps < 8) {
	down();
	colors[steps] = getColor();
	steps = steps + 1;
}

down();
steps = 0;

while (steps < 8) {
	right();
	setColor(colors[steps]);
	right();
	steps = steps + 1;
	up();
}

up();
