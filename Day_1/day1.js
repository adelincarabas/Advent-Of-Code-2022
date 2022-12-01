var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day1.txt", "utf8");
  input = data;
} catch (e) {
  console.log("Error:", e.stack);
}

// console.log(input);

splitInputs = (inputExample) => {
  inputExample = inputExample.split(/\r?\n/);
  return inputExample;
};

// str = str.replace(/[^0-9]/g, "");

let calculation = splitInputs(input);

console.log(calculation);

let calories = 0;
let caloriesArray = [];
for (let i = 0; i < calculation.length; i++) {
  if (calculation[i] !== "") {
    calories = calories + Number(calculation[i]);
  } else {
    caloriesArray.push(calories);
    calories = 0;
  }
}

const max = Math.max(...caloriesArray);

console.log(max);

//PART TWO

caloriesArray.sort(function (a, b) {
  return a - b;
});

// console.log(caloriesArray);

console.log(
  caloriesArray[caloriesArray.length - 1] +
    caloriesArray[caloriesArray.length - 2] +
    caloriesArray[caloriesArray.length - 3]
);
