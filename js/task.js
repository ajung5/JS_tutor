// function bitWiseAND(n, m) {
//   let result = n & m;
//   let bitWise = result.toString(2);
// }

function bitwiseAND(n1, n2) {
  n1 = n1.toString(2).split("").reverse();
  n2 = n2.toString(2).split("").reverse();
  return parseInt(
    n1
      .map((a, i) => (Number(a) + Number(n2[i]) == 2 ? "1" : 0))
      .reverse()
      .join(""),
    2
  );
}
