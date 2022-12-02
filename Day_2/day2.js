var fs = require("fs");
let input = "";
try {
  var data = fs.readFileSync("day2.txt", "utf8");
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

let score = 0;
for (let i = 0; i < calculation.length; i++) {
  if (calculation[i][0] == "A") {
    if (calculation[i][2] == "X") {
      score = score + 4;
    }
    if (calculation[i][2] == "Y") {
      score = score + 8;
    }
    if (calculation[i][2] == "Z") {
      score = score + 3;
    }
  }
  if (calculation[i][0] == "B") {
    if (calculation[i][2] == "X") {
      score = score + 1;
    }
    if (calculation[i][2] == "Y") {
      score = score + 5;
    }
    if (calculation[i][2] == "Z") {
      score = score + 9;
    }
  }
  if (calculation[i][0] == "C") {
    if (calculation[i][2] == "X") {
      score = score + 7;
    }
    if (calculation[i][2] == "Y") {
      score = score + 2;
    }
    if (calculation[i][2] == "Z") {
      score = score + 6;
    }
  }
  //   console.log(calculation[i][0]);
}

console.log(score);

score = 0;
for (let i = 0; i < calculation.length; i++) {
  if (calculation[i][0] == "A") {
    if (calculation[i][2] == "X") {
      score = score + 3;
    }
    if (calculation[i][2] == "Y") {
      score = score + 4;
    }
    if (calculation[i][2] == "Z") {
      score = score + 8;
    }
  }
  if (calculation[i][0] == "B") {
    if (calculation[i][2] == "X") {
      score = score + 1;
    }
    if (calculation[i][2] == "Y") {
      score = score + 5;
    }
    if (calculation[i][2] == "Z") {
      score = score + 9;
    }
  }
  if (calculation[i][0] == "C") {
    if (calculation[i][2] == "X") {
      score = score + 2;
    }
    if (calculation[i][2] == "Y") {
      score = score + 6;
    }
    if (calculation[i][2] == "Z") {
      score = score + 7;
    }
  }
  //   console.log(calculation[i][0]);
}

console.log(score);
