## Exercise 1-1
English: 
	Draw a circle of 2 radius from the (5, 5) as the center point. 

Code:
	`circle(2, 5, 5);`

English: 
	Draw a 7w*4h rectangle from the (5, 5) as the center point. 

Code:
	`rectangle(7, 4, 5, 5);`

English: 
	Draw a 4*4 square from the (5, 5) as the center point. 

Code:
	`square(4, 5, 5);`

## Exercise 1-2
A picture is included under the same folder. 

## Exercise 1-3
```
point(1, 1);
line(1, 5, 1, 9);
line(0, 9, 5, 4);
ellipse(6, 2, 7, 3);
rect(5, 6, 5, 4);
```

## Exercise 1-4
```
background(0);
nostroke();
fill(255);
rectMode(CORNERS);
rect(101, 2, 198, 99);
rect(2, 101, 99, 198);
fill(150);
rect(101, 101, 198, 198);
```

## Exercise 1-5
```
0, 0, 255
127, 0, 127
200, 200, 0
```

## Exercise 1-6
1. Dark green
2. Dark gray
3. Blue
4. White
5. Bright yellow
6. Bright teal
7. Red

## Exercise 1-7
```
function setup() {
	background(255);
	rectMode(CENTER);
}

//lightbulbBody
function draw() {
	fill(255);
	colorMode(RGB, 255, 255, 255, 100);
	stroke(245, 245, 100, 100);
	ellipse(50, 40, 30, 30);
	rect(50, 65, 16, 26);
	ellipse(43, 40, 12, 12);
	ellipse(57, 40, 12, 12);
	fill(0);
	ellipse(40, 40, 5, 5);
	ellipse(60, 40, 5, 5);
}
```
