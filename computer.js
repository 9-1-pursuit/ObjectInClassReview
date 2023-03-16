let computer = {
  brand: "Tandy",
  weight: 22,
  working: false,
  condition: "mint",
  price: 2894,
  powerUp() {
    return "the computer now is on";
  },
  powerDown() {
    return "the computer is now off";
  },
};
// for (let key in computer) {
//   console.log(computer[key]);
// }

let w = "weight";

// this will create a variable that does not reference the object

// created a weight variable, but the value is 22 computer['22']
let { weight } = computer;

// console.log(computer.powerDown());
computer[weight] = 50;

// console.log(weight);
// console.log(computer);

// w = "height";
// console.log(computer);
module.exports = computer;
