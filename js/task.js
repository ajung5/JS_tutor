// function bitWiseAND(n, m) {
//   let result = n & m;
//   let bitWise = result.toString(2);
// }

// function bitwiseAND(n1, n2) {
//   n1 = n1.toString(2).split("").reverse();
//   n2 = n2.toString(2).split("").reverse();
//   return parseInt(
//     n1
//       .map((a, i) => (Number(a) + Number(n2[i]) == 2 ? "1" : 0))
//       .reverse()
//       .join(""),
//     2
//   );
// }

const bitwiseAND = (n1, n2) => n1 & n2;
const bitwiseOR = (n1, n2) => n1 | n2;
const bitwiseXOR = (n1, n2) => n1 ^ n2;

console.info(bitwiseAND(7, 12));

// function getFirstValue([a, b, c]) {
//   console.info(`Ini index array ${a}`);
// }

// getFirstValue([1, 2, 3]);

function getFirstValue(arr) {
  return arr[0];
}

getFirstValue([1, 2, 3]);

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

console.info(Person(first:"john"));
