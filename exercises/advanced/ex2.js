let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  let newMatrix = Array(matrix[0].length)
    .fill(0)
    .map((_) => Array(matrix.length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
}

function transposeInPlace(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //[matrix[0][1], matrix[1][0]] = [matrix[1][0], matrix[0][1]];
  return matrix;
}

console.log(transpose(matrix));
console.log(matrix);

console.log(transposeInPlace(matrix));
console.log(matrix);
