//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (input) => {

  let result=[];

  let top = 0;
  let bottom = input - 1;
  let left = 0;
  let right = input - 1;

  let num = 1;

  for (let i = 0; i < input; i++) {
  let row = [];

  for (let j = 0; j < input; j++) {
    row.push(0);
  }

  result.push(row);
}

  while (top <= bottom && left <= right) {
    
    for (let i = left; i <= right; i++) {
    result[top][i] = num;
    num++;
    }
    top++;

    for (let j = top; j <= bottom; j++) {
    result[j][right] = num;
    num++;
    }
    right--;

    for (let k = right; k >= left; k--) {
    result[bottom][k] = num;
    num++;
    }
    bottom--;

    for (let l = bottom; l >= top; l--) {
    result[l][left] = num;
    num++;
    }
    left++;


  }
  return result;
};
