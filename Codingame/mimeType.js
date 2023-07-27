const N = parseInt(readline());
const Q = parseInt(readline());

let mimeMap = new Map();

for (let i = 0; i < N; i++) {
  let inputs = readline().split(" ");
  const EXT = inputs[0].toLowerCase();
  const MT = inputs[1];
  mimeMap.set(EXT, MT);
}

for (let i = 0; i < Q; i++) {
  let result;
  let filesArray = readline().split(".");
  if (filesArray.length > 1) {
    let extension = filesArray.pop().toLowerCase();
    if (mimeMap.has(extension)) {
      result = mimeMap.get(extension);
    }
  }

  if (result !== undefined) {
    console.log(result);
  } else console.log("UNKNOWN");
}
