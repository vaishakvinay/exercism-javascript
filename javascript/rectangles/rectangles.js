//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(input) {

  let result = 0;
  let cornerPositions = [];

  for (let i = 0; i <input.length; i++) {
    

    for(let j=0; j<input[i].length ;j++){

      if (input[i][j]==='+'){

        cornerPositions.push([i,j]);
      }

    }
  
}

for (let i = 0; i < cornerPositions.length; i++) {
  for (let j = i + 1; j < cornerPositions.length; j++) {

    if (cornerPositions[i][0] === cornerPositions[j][0]) {

      for (let k = 0; k < cornerPositions.length; k++) {
        if (
          cornerPositions[k][0] > cornerPositions[i][0] &&
          cornerPositions[k][1] === cornerPositions[i][1]
        ) {

          for (let m = 0; m < cornerPositions.length; m++) {
            if (
              cornerPositions[m][0] === cornerPositions[k][0] &&
              cornerPositions[m][1] === cornerPositions[j][1]
            ) {
              let topValid = true;

              for (let col = cornerPositions[i][1] + 1;col < cornerPositions[j][1];col++) {
                let char = input[cornerPositions[i][0]][col];
              
                if (char !== '-' && char !== '+') {
                  topValid = false;
                  break;
                }
              }

              let bottomValid = true;  

              for (let col = cornerPositions[k][1] + 1;col < cornerPositions[m][1];col++) {
                let char = input[cornerPositions[k][0]][col];
              
                if (char !== '-' && char !== '+') {
                  bottomValid = false;
                  break;
                }
              }
              
              let leftValid = true;
              for (let row = cornerPositions[i][0] + 1;row < cornerPositions[k][0];row++) {

              let char = input[row][cornerPositions[i][1]];
                  if (char !== '|' && char !== '+') {
                  leftValid = false;
                  break;
                }

              }

              let rightValid = true;
              for (let row = cornerPositions[j][0] + 1;row < cornerPositions[m][0];row++) {

              let char = input[row][cornerPositions[j][1]];
                  if (char !== '|' && char !== '+') {
                  rightValid = false;
                  break;
                }

              }
              if (topValid && bottomValid && leftValid && rightValid) {
                  result++;
                }


            }
          }

        }
      }
    }
  }
}
return result;

};
