// makes arrays flat with reduce:
// input: [1,3,[4,5],6,7,8,[9,10]]
// output: [1,3,4,5,6,7,8,9,10]

// **bonus implement it for nested arrays:
// Input: [[1, [2,3, [4,4]]], 6, 7, [8, 9]]
// Output: [1,2,3,4,4,6,7,8,9]

const zrr1 = [1, 3, [4, 5], 6, 7, 8, [9, 10]];

const arr2 = [[1, [2, 3, [4, 4]]], 6, 7, [8, 9]];

const flatArr = zrr1.reduce((n, n2) => {
  return n.concat(n2);
}, []);

console.log(flatArr);

// const flatArr2=arr2.reduce((n, n2) => {
//     return n.concat(n2);
// }, [])

// console.log(flatArr2);

const fl2 = arr2.flat(3);
console.log(fl2);
