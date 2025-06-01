function rand(min, max) {
  return Math.floor(Math.random() * max) + min;
}

var pool = ["E9", "BD", "1C", "55", "7A"];

function generateMatrix() {
  var matrix = [];

  for (let row = 0; row < 6; row++) {
    matrix.push([]);
    for (let col = 0; col < 6; col++) {
      randomIndex = rand(0, pool.length);
      randomVal = pool[randomIndex];
      matrix[row].push(randomVal);
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

function clickedCode(matrixVal) {
  console.log("Clicked:", matrixVal);
}
