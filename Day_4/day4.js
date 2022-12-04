var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day4.txt", "utf8");
  input = data;
} catch (e) {
  console.log("Error:", e.stack);
}

splitInputs = (inputExample) => {
  inputExample = inputExample.split(/\r?\n/);
  return inputExample;
};

let inputSplitedNewLine = splitInputs(input);

console.log(inputSplitedNewLine);

//PART ONE

let numberArrays = [];
for (let i = 0; i < inputSplitedNewLine.length; i++) {
  numberArrays.push(inputSplitedNewLine[i].match(/\d+/g).map(Number));
}

console.log(numberArrays);

console.log(numberArrays[0]);

let score = 0;
for (let i = 0; i < numberArrays.length; i++) {
  if (
    numberArrays[i][0] >= numberArrays[i][2] &&
    numberArrays[i][0] <= numberArrays[i][3] &&
    numberArrays[i][1] >= numberArrays[i][2] &&
    numberArrays[i][1] <= numberArrays[i][3]
  ) {
    score++;
  } else if (
    numberArrays[i][2] >= numberArrays[i][0] &&
    numberArrays[i][2] <= numberArrays[i][1] &&
    numberArrays[i][3] >= numberArrays[i][0] &&
    numberArrays[i][3] <= numberArrays[i][1]
  ) {
    score++;
  }
}

console.log(score);

//PART TWO
score = 0;
for (let i = 0; i < numberArrays.length; i++) {
  let number1 = numberArrays[i][1] - numberArrays[i][0];
  let number2 = numberArrays[i][3] - numberArrays[i][2];
  let r = 1;
  for (let s = 0; s < numberArrays[i].length; s++) {
    for (let j = 0; j <= number1; j++) {
      if (
        numberArrays[i][0] + j >= numberArrays[i][2] &&
        numberArrays[i][0] + j <= numberArrays[i][3] &&
        r == 1
      ) {
        score++;
        r = 0;
      }
    }
  }

  for (let s = 0; s < numberArrays[i].length; s++) {
    for (let j = 0; j <= number2; j++) {
      if (
        numberArrays[i][2] + j >= numberArrays[i][0] &&
        numberArrays[i][2] + j <= numberArrays[i][1] &&
        r == 1
      ) {
        score++;
        r = 0;
      }
    }
  }
}

console.log(score);
