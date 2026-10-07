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
// Q1
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

// Promise:
// function getProducts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let products = [
//         { name: "Laptop", price: 50000 },
//         { name: "Phone", price: 30000 },
//         { name: "Tablet", price: 20000 },
//       ];
//       resolve(products);
//     }, 2000);
//   });
// }
// getProducts()
//   .then((products) => {
//     let costlier = products.filter((product) => product.price >= 25000 );
//     let names = costlier.map((product) => product.name);
//     console.log(names);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Q2
// function getStudents() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let students = [
//         { name: "Arman", marks: 90 },
//         { name: "Aman", marks: 85 },
//         { name: "Anim", marks: 80 },
//       ];
//       resolve(students);
//     }, 2000);
//   });
// }
// getStudents()
//   .then((students) => {
//     let toppers = students.filter((student) => student.marks > 80);
//     let names = toppers.map((stu) => stu.name);
//     console.log(names);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Async & Await:
// Q3
// function getStudents() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let students = [
//         { name: "Arman", marks: 95 },
//         { name: "Aman", marks: 90 },
//         { name: "Anim", marks: 85 },
//       ];
//       resolve(students);
//     }, 2000);
//   });
// }
// async function showStudents() {
//   try {
//     let students = await getStudents();
//     let top = students.filter((student) => student.marks >= 80);
//     let names = top.map((stu) => stu.name);
//     console.log(names);
//   } catch (error) {
//     console.log(error);
//   }
// }
// showStudents();

// fetch() Using get:
// let api = "https://jsonplaceholder.typicode.com/users";
// fetch(api)
//   .then((res) => {
//     return res.json();
//   })
//   .then((users) => {
//     let a = users.filter((user) => user.id < 5);
//     console.log(a);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch() Using post:
// let api = "https://jsonplaceholder.typicode.com/users";
// let newUser = {
//   name: "Arman",
//   username: "arman123",
//   email: "arman@example.com",
// };
// fetch(api, {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Q5
// let api = "https://jsonplaceholder.typicode.com/users";
// let newUser = {
//   name: "Arman",
//   username: "arman123",
//   email: "arman@example.com",
// };
// fetch(api, {
//   method: "post",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });