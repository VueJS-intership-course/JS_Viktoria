// transform array to object using reduce:
// [
//   {key: 'apple', count: 1},
//   {key: 'orange', count: 40},
//   {key: 'banana', count: 158}
// ]

// transform to:

// {
//   apple: 1,
//   orange: 40,
//   banana: 158
// }

const arr1 = [
  { key: "apple", count: 1 },
  { key: "orange", count: 40 },
  { key: "banana", count: 158 },
];

const transformedArr = arr1.reduce((previousObj, currentObj) => {
  return Object.assign(previousObj, {
    [currentObj.key]: currentObj.count,
  });
}, {});

console.log(transformedArr);
