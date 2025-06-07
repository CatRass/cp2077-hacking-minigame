function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

var codePool = ["E9", "BD", "1C", "55", "7A"];
var rewardPool = [
  ["Basic Datamine"],
  ["Advanced Datamine"],
  ["Expert Datamine"],
];

// Function to generate code and click matrix
function generateMatrix(codes) {
  var matrix = [];

  for (let row = 0; row < 6; row++) {
    // Each matrix entry stores the cell value and it's state.
    // State is between 'clickedTrue' and 'clickedFalse' (default)
    matrix.push([]);
    for (let col = 0; col < 6; col++) {
      randomIndex = rand(0, codePool.length);
      randomVal = codePool[randomIndex];
      matrix[row].push({ cell: randomVal, state: "clickedFalse" });
    }
  }

  // console.log(matrix);
  return matrix;
}

function generateCodes() {
  var codes = [];
  var numCodes = rand(1, 2);
  var maxCodeLen = rand(1, 2);

  for (let currCode = 0; currCode <= numCodes; currCode++) {
    var codeLen = rand(1, maxCodeLen);
    var codeVal = [];
    for (let currByte = 0; currByte <= codeLen; currByte++) {
      randCode = rand(0, codePool.length);
      codeVal.push(codePool[randCode]);
    }
    var rewardVal = rewardPool[currCode][rand(0, rewardPool[currCode].length)];
    codes.push({ codeValue: codeVal, rewardValue: rewardVal });
  }

  // console.log(codes);
  return codes;
}

function generateData() {
  generatedCodes = generateCodes();
  generatedMatrix = generateMatrix(generatedCodes);

  returnObj = {
    matrix: generatedMatrix,
    codes: generatedCodes,
  };

  console.debug(returnObj);
  return returnObj;
}

function clickedCode(matrixVal, row, col) {
  console.log("Clicked:", matrixVal["cell"], "at (", row, ",", col, ")");
}
