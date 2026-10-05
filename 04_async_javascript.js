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
