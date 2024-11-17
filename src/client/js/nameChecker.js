function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);
  let names = ["Picard", "Janeway", "Kirk", "Archer", "Georgiou"];

  if (names.includes(inputText)) {
    alert("Welcome, Captain!");
  }
}

function dontDoAnything() {
  console.log("I don't do anything in this project!");
}
export { checkForName, dontDoAnything };


