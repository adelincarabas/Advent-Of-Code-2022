var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day3.txt", "utf8");
  input = data;
} catch (e) {
  console.log("Error:", e.stack);
}

// console.log(input);

splitInputs = (inputExample) => {
  inputExample = inputExample.split(/\r?\n/);
  return inputExample;
};

let inputSplitedNewLine = splitInputs(input);

// console.log(inputSplitedNewLine);

//PART ONE
let priorityList = [];
let r = 0;
for (let i = 0; i < inputSplitedNewLine.length; i++) {
  r = 1;
  for (let j = 0; j < inputSplitedNewLine[i].length / 2 - 1; j++) {
    for (
      let z = inputSplitedNewLine[i].length - 1;
      z >= inputSplitedNewLine[i].length / 2;
      z--
    ) {
      if (inputSplitedNewLine[i][j] == inputSplitedNewLine[i][z] && r == 1) {
        r = 0;
        priorityList.push(inputSplitedNewLine[i][z]);
      }
    }
  }
}

let count = 0;
let threeArrays = [];
let foundIt = [];
while (count != inputSplitedNewLine.length) {
  threeArrays.push(
    inputSplitedNewLine[count],
    inputSplitedNewLine[count + 1],
    inputSplitedNewLine[count + 2]
  );
  let r = 0;
  for (let i = 0; i < threeArrays.length; i++) {
    for (let j = 0; j < threeArrays[i].length; j++) {
      if (threeArrays[0].includes(threeArrays[i][j])) {
        if (threeArrays[1].includes(threeArrays[i][j])) {
          if (threeArrays[2].includes(threeArrays[i][j]) && r == 0) {
            r = 1;
            foundIt.push(threeArrays[i][j]);
          }
        }
      }
    }
  }

  threeArrays = [];
  count = count + 3;
}

// console.log(foundIt);

let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
alphabetLowerCase = alphabetLowerCase.split("");

let alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabetUpperCase = alphabetUpperCase.split("");

let priorityScore = 0;
for (let i = 0; i < foundIt.length; i++) {
  for (let j = 0; j < alphabetLowerCase.length; j++) {
    if (foundIt[i] == alphabetLowerCase[j]) {
      priorityScore = priorityScore + j + 1;
    }
  }

  for (let j = 0; j < alphabetUpperCase.length; j++) {
    if (foundIt[i] == alphabetUpperCase[j]) {
      priorityScore = priorityScore + j + 27;
    }
  }
}

console.log(priorityScore);

//PART TWO

priorityScore = 0;
for (let i = 0; i < priorityList.length; i++) {
  for (let j = 0; j < alphabetLowerCase.length; j++) {
    if (priorityList[i] == alphabetLowerCase[j]) {
      priorityScore = priorityScore + j + 1;
    }
  }

  for (let j = 0; j < alphabetUpperCase.length; j++) {
    if (priorityList[i] == alphabetUpperCase[j]) {
      priorityScore = priorityScore + j + 27;
    }
  }
}
console.log(priorityScore);
