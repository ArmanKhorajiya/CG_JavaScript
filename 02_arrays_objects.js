// Q1
// let arr = ["JavaScript", "Python", "Java", "C++"];
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.push("TypeScript"));
// console.log(arr);

// Q2
// let numbers = [10, 20, 30];
// numbers.push(40);
// numbers.pop();
// numbers.unshift(5);
// numbers.shift()
// console.log(numbers);

// Q3
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log(fruits.slice(1, 4));
// fruits.splice(2, 1);
// console.log(fruits);

// Q4
// let numbers = [10, 15, 20, 25, 30];
// let maap = numbers.map((num) => {
//   return num * 2;
// });
// let faat = numbers.filter((num) => {
//   return num > 20;
// });
// let saat = numbers.find((num) => {
//   return num > 20;
// });
// console.log(maap);
// console.log(faat);
// console.log(saat);

// Q5
// let product = {
//   name: "Laptop",
//   price: 50000,
//   brand: "Dell",
// };
// console.log(product.name);
// console.log(product.price);
// product.price = 55000;
// product.stock = 10;
// console.log(product);

// Q6
// let employee = {
//   name: "Rahul",
//   salary: 50000,
//   address: {
//     city: "Ahmedabad",
//     state: "Gujarat",
//   },
// };
// console.log(employee.name);
// console.log(employee.address.city);
// console.log(employee.address.state);
// employee.salary = 60000;
// employee.address.pincode = 380001;
// console.log(employee);

// Q7
// let arr = [
//   {
//     name: "Laptop",
//     price: 50000,
//   },
//   {
//     name: "Phone",
//     price: 30000,
//   },
//   {
//     name: "Tablet",
//     price: 20000,
//   },
// ];
// console.log(arr[0].name);
// console.log(arr[1].price);
// arr[2].price = 25000;
// console.log(arr);

// Q8
// let students = [
//   { name: "Arman", marks: 85 },
//   { name: "Rahul", marks: 72 },
//   { name: "Jay", marks: 90 },
// ];
// let result = students.map((student) => student.name);
// let faat = students.map((student) => student.marks);
// console.log(result);
// console.log(faat);

// Q9
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 20000 },
//   { name: "Monitor", price: 15000 },
// ];
// let Costly = products.filter((product) => product.price > 20000);
// let Cheaply = products.filter((product) => product.price <= 20000);
// console.log(Costly);
// console.log(Cheaply);

// Q10
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Tablet", price: 20000 },
// ];
// let first = products.find((product) => product.price < 40000);
// console.log(first);

// Q11
// let students = [
//   { name: "Arman", marks: 85, city: "Wankaner" },
//   { name: "Rahul", marks: 72, city: "Ahmedabad" },
//   { name: "Jay", marks: 90, city: "Rajkot" },
//   { name: "Amit", marks: 65, city: "Ahmedabad" },
// ];
// // A:
// let onlyNames = students.map((student) => student.name);
// console.log(onlyNames);
// // B:
// let mark = students.filter((student) => student.marks >= 80);
// console.log(mark);
// // C:
// let first = students.find((student) => (student.city = "Ahmedabad"));
// console.log(first);
// // D:
// students[3].marks = 75;
// console.log(students);
