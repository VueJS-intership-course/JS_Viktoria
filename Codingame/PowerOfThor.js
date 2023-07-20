var inputs = readline().split(" ");
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
let initialTx = parseInt(inputs[2]);
let initialTy = parseInt(inputs[3]);

let x = "";
let y = "";

// game loop
while (true) {
  let remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    //check X direction
  if (initialTx > lightX) {
    x = "W";
    initialTx--;
  } else if (initialTx < lightX) {
    x = "E";
    initialTx++;
  } else {
    x = "";
  }

  //check Y direction
  if (initialTy > lightY) {
    y = "N";
    initialTy--;
  } else if (initialTy < lightY) {
    y = "S";
    initialTy++;
  } else {
    y = "";
  }
  console.log(y + x);
}
