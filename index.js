const bond = require("./bond");
const backpack = require("./backpack");

// console.log(backpack.contents[3].wallet[2][1]);

// console.log(backpack.contents[4].pockets.inner.inner[1].mintFlavor);
// console.log(backpack.unZipIt().pickUpItems(2));

// since contents is an array, if we change the value on line 12, it will change both the old array and the new array.
const { contents } = backpack;
// console.log(contents);
contents[0] = "Tablet";

// console.log("just contents:", contents); // our new object
// console.log("backpack:", backpack.contents); // our old object

// pass by value - objects have their own place in memory
// pass by reference - objects point to the same place in memort

//aliasing
const { wallet: clip } = backpack.contents[3];

console.log(clip);
