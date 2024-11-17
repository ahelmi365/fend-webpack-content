function liveFunction() {
  console.log("I'm a live function 1");
}
function deadFunctionOne() {
  console.log("I'm a dead function 1");
}
function deadFunctionTwo() {
  console.log("I'm a dead function 2");
}
function deadFunctionThree() {
  console.log("I'm a dead function 3");
}

export { liveFunction, deadFunctionOne, deadFunctionTwo, deadFunctionThree };
