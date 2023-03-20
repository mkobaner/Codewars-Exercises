/*Geometry Basics: Distance between points in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Tests compare expected result and actual answer with tolerance of 1e-6.*/

distanceBetweenPoints=(a, b)=> Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));