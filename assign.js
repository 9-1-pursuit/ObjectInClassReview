let obj = {
  name: "JD",
  age: 2,
  happy: true,
  colors: ["blue", "red", "green"],
  address: { street: "Colony", zip: "22341", city: "Beacon" },
};

// newObj.colors

let car = { make: "Mercedes", model: "Maybach", engine: { cylinder: 6 } };

// const newObj = Object.assign(obj, car);

// const newObj = {
//   name: "JD",
//   colors: ["blue", "red", "green"],
//   address: { street: "Colony", zip: "22341", city: "Beacon" },
//   make: "Mercedes",
//   model: "Maybach",
// };
// const clonedObj = Object.assign({}, obj);
// const addCar = Object.assign(clonedObj, car);

// console.log("oldObj", obj);
// console.log("clone", clonedObj);
// console.log("addCar", addCar);
// console.log("newObj", newObj);
// console.log("car", car);

// if we spread in the values of the two objects into a new object. We are creating a separate place in memory for that object and it's primitive values. However, if a value for any key in the object is another object, both the former object and the current object are pointing to the same place in memory.
//Pass By Reference.
const restObj2 = { ...obj, ...car };

//If we make a deep copy of an object, even the object values inside the object will have their own place in memory.
const restObj = { ...JSON.parse(JSON.stringify(obj)), ...car };
restObj.engine.cylinder = 2;
restObj.name = "Jon";
restObj.colors[0] = "green";

console.log("rest", restObj);
// console.log("oldObj", obj);
console.log("car", car);
