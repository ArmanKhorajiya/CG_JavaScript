// Q1
// // A:
// const multiply = (a, b) => {
//   console.log(a * b);
// };
// multiply(5, 4);
// // B:
// const isEven = (n) => {
//   console.log(n % 2 == 0 ? "Even" : "Not Even");
// };
// isEven(10);
// // C:
// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };
// greet("Arman");

// Q2
// let product = "Laptop";
// let price = 50000;
// console.log(`The ${product} costs ${price}`);

// Q3
// let numbers = [10, 20, 30];
// let [a, b, c] = numbers;
// console.log(a, b, c);

// Q4
// let user = {
//   name: "Arman",
//   age: 20,
//   city: "Wankaner",
// };
// let { name, city } = user;
// console.log(name, city);

// Q5
// let numbers = [10, 20, 30];
// let newArray = [...numbers, 40];
// console.log(newArray);

// Q6
// let user = {
//   name: "Arman",
//   age: 20,
// };
// let newObject = { ...user, age: 21, city: "Wankaner" };
// console.log(newObject);

// Q7
// function sumAll(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(sumAll(5, 10, 15, 20));

// Q8
// let productName = "Laptop";
// let price = 50000;
// let brand = "Dell";
// let newObject = {
//   productName,
//   price,
//   brand,
// };
// console.log(newObject);

// Q9
// class product {
//   constructor(name, price, brand) {
//     this.name = name;
//     this.price = price;
//     this.brand = brand;
//   }
//   onlyName() {
//     console.log(this.name);
//   }
//   onlyBrand() {
//     console.log(this.brand);
//   }
//   showDetails() {
//     console.log(`${this.name} costs ${this.price}`);
//   }
// }
// p1 = new product("Laptop", 50000, "Dell");
// p2 = new product("Phone", 30000, "Samsung");
// p1.onlyName();
// p2.onlyBrand();
// p1.showDetails();

// Q10
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`My name is ${this.name}`);
//   }
// }
// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age);
//     this.course = course;
//   }
//   study() {
//     console.log(`${this.name} is studing ${this.course}`);
//   }
// }
// let student = new Student("Arman", 20, "JavaScript");
// student.introduce();
// student.study();
