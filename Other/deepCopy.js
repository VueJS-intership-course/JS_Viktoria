function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const newObj = {};
  for (const key in obj) {
    newObj[key] = deepCopy(obj[key]);
  }

  return newObj;
}

const a = { a: 1, b: { d: 12, v: 233 }, arr: [1, 2, 3] };
const copyArr = deepCopy(a);

console.log(copyArr);
// test
console.log(copyArr === a);
console.log(copyArr.b === a.b);
console.log(copyArr.arr === a.arr);
