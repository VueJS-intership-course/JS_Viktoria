const n = parseInt(readline());
var inputs = readline().split(" ");

let top = 0;
let loss = 0;

for (let i = 0; i < n; i++) {
  let v = parseInt(inputs[i]);
  if (v > top) {
    top = v;
  }
  if (loss < top - v) {
    loss = top - v;
  }
}

if (loss === 0) {
  console.log(0);
} else {
  console.log(-loss);
}
