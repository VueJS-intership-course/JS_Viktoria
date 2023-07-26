// find a sum of a sequence using reduce
// Input: [1, 8, 9, -5, 10]
// output: 23

const arr1 = [1, 8, 9, -5, 10];

const reducedArr = arr1.reduce((value, nextValue) => {
  return value + nextValue;
}, 0);

console.log(reducedArr);
