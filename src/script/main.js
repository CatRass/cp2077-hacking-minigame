function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

var pool = ["E9", "BD", "1C", "55", "7A"];

// Function to generate code and click matrix
function generateMatrix(codes) {
  var matrix = new Array(6).fill(Array(6));

  for (let row = 0; row < 6; row++) {
    // Each matrix entry stores the cell value and it's state.
    // State is between 'clickedTrue' and 'clickedFalse' (default)
    for (let col = 0; col < 6; col++) {
      randomIndex = rand(0, pool.length);
      randomVal = pool[randomIndex];
      matrix[row][col] = { cell: randomVal, state: "clickedFalse" };
    }
  }

  //   console.log(matrix);
  return matrix;
}

function generateCodes() {
  var codes = [];
  var numCodes = rand(1, 2);
  var maxCodeLen = rand(1, 2);

  for (let currCode = 0; currCode <= numCodes; currCode++) {
    codes.push([]);

    var codeLen = rand(1, maxCodeLen);
    for (let currByte = 0; currByte <= codeLen; currByte++) {
      randCode = rand(0, pool.length);
      codes[currCode].push(pool[randCode]);
    }
  }

  //   console.log(codes);
  return codes;
}

function generateData() {
  generatedCodes = generateCodes();
  generatedMatrix = generateMatrix(generatedCodes);

  returnObj = {
    matrix: generatedMatrix,
    codes: generatedCodes,
  };

  return returnObj;
}

function clickedCode(matrixVal, row, col) {
  console.log("Clicked:", matrixVal["cell"], "at (", row, ",", col, ")");
}
