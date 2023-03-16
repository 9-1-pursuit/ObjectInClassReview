let fruits = ["apple", "orange", "apple", "pear", "apple", "banana", "orange"];
// How many of each fruit are in the array

function howMany(arr) {
  let obj = {};

  arr.forEach((item) => {
    if (!obj[item]) obj[item] = 1;
    else obj[item]++;
  });
  console.log(obj);
}

console.log(howMany(fruits));
