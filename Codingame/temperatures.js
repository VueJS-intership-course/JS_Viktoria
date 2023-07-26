/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
if (n == 0) {
  console.log(0);
} else {
  const arrayy = [];
  let closestToZero;

  var inputs = readline().split(" ");
  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);
    arrayy.push(t);
    if (i === 0) {
      closestToZero = inputs[i];
    }
    if (t > 0 && t < closestToZero) {
      closestToZero = t;
    }
    if (t < 0 && t > closestToZero && !arrayy.includes(-t)) {
      closestToZero = t;
    }
  }
  console.log(closestToZero);
}
