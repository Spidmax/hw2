function snake(direction) {
	steps = 0;
	while (steps < 7) {
		direction();
		steps = steps + 1;
	}
}


down();

snake(down);
right();
right();

snake(up);
right();
right();

snake(down);
right();
right();

snake(up);
right();
right();

snake(down);
right();
