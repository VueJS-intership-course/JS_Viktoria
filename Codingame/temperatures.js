const n = parseInt(readline());
if (n === 0) {
  console.log(0);
} else {
  const tempsArr = [];

  var inputs = readline().split(" ");
  let closestToZero = inputs[0];

  for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);
    tempsArr.push(t);

    closestToZero = t > 0 && t < closestToZero ? t : closestToZero;
    closestToZero = t < 0 && t > closestToZero && !tempsArr.includes(-t) ? t : closestToZero;
  }
  console.log(closestToZero);
}
