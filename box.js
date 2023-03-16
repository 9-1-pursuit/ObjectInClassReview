const computer = require("./computer");

const box = {
  brand: "Tandy",
  joystick: "Classic Vintage 1000",
  keyboard: "Keyfun 5000",
  working: "true",
};
const newComputer = Object.assign(computer, box);
console.log("new", newComputer);
console.log("old", computer);
console.log("box", box);
