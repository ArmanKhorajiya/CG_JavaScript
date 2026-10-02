export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function square(n) {
  return n * n;
}

export function cube(n) {
  return n * n * n;
}

export default function calculateAverage(students) {
  let total = students.reduce((total, student) => {
    return total + student.marks;
  }, 0);
  return total / students.length;
}
