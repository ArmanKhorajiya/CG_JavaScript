import calculateAverage, { add, cube, multiply, square } from "./math.js";

// console.log(add(10, 20));
// console.log(multiply(5, 4));
// console.log(square(4));
// console.log(cube(4));

let students = [
  { name: "Arman", marks: 85 },
  { name: "Rahul", marks: 75 },
  { name: "Jay", marks: 90 },
];
console.log(calculateAverage(students));
