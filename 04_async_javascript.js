// // Callback ex:
// function getStudents(callback) {
//   setTimeout(() => {
//     let students = [
//       { name: "Arman", marks: 85 },
//       { name: "Rahul", marks: 75 },
//       { name: "Jay", marks: 90 },
//     ];
//     callback(students);
//   }, 2000);
// }
// getStudents((students) => {
//   console.log("Students received:");
//   console.log(students);
// });

// // Callback with filter ex:
// function getStudents(callback) {
//   setTimeout(() => {
//     let students = [
//       { name: "Arman", marks: 90 },
//       { name: "Aman", marks: 95 },
//       { name: "Anim", marks: 80 },
//     ];
//     callback(students);
//   }, 2000);
// }
// getStudents((students) => {
//   let toppers = students.filter((student) => student.marks >= 90);
//   console.log(toppers);
// });

// // Callback with map ex:
// function getStudents(callback) {
//   setTimeout(() => {
//     let students = [
//       { name: "Arman", marks: 90 },
//       { name: "Aman", marks: 95 },
//       { name: "Anim", marks: 80 },
//     ];
//     callback(students);
//   }, 2000);
// }
// getStudents((students) => {
//   let toppers = students.filter((student) => student.marks >= 90);
//   let names = toppers.map((student) => student.name);
//   console.log(names);
// });

// ex:
// function getProducts(callback) {
//   setTimeout(() => {
//     let products = [
//       { name: "Laptop", price: 50000 },
//       { name: "Phone", price: 30000 },
//       { name: "Tablet", price: 20000 },
//     ];
//     callback(products);
//   }, 2000);
// }
// getProducts((products) => {
//   let costlier = products.filter((product) => product.price > 25000);
//   let names = costlier.map((product) => product.name);
//   console.log(names);
// });

