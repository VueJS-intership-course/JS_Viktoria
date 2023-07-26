const N = parseInt(readline());
const Q = parseInt(readline());

var mimeMap = new Map();

for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const EXT = inputs[0].toLowerCase();
  const MT = inputs[1];
  mimeMap.set(EXT, MT);
}

for (let i = 0; i < Q; i++) {
  let result;
  const FNAME = readline();
  var qArray = FNAME.split(".");
  if (qArray.length > 1) {
    var extension = qArray.pop().toLowerCase();
    if (mimeMap.has(extension)) {
      result = mimeMap.get(extension);
    }
  }

  if (result !== undefined) {
    console.log(result);
  } else console.log("UNKNOWN");
}
