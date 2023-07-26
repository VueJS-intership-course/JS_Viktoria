const arr1 = [5, 6, 2, 4, -7, 11, 28];

//filter >5
const filteredArr = arr1.filter((num) => num > 5);
console.log(filteredArr);

//map to obj
const objArr = arr1.map((num) => {
  return { val: num };
});
console.log(objArr);

// reduce
const reducedArr = arr1.reduce((n, n2) => {
  return n * n2;
});

console.log(reducedArr);
