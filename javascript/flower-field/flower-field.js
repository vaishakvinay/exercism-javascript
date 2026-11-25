//
// This is only a SKELETON file for the 'Flower Field' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {

  
  let garden = [];

  for (let i = 0; i < input.length; i++) {
    let row = [];
  
    for (let j = 0; j < input[i].length; j++) {
      row.push(input[i][j]);
    }
  
    garden.push(row);
  }

  for (let i = 0; i <input.length; i++) {
    

    for(let j=0; j<input[i].length ;j++){


      if(input[i][j]==='*'){

        for (let row = i - 1; row <= i + 1; row++) {


        for (let col = j - 1; col <= j + 1; col++) {

          if (row >= 0 && row < input.length && col >= 0 && col < input[row].length && !(row === i && col === j)) {
            
            if (garden[row][col] === ' ') {
              garden[row][col] = '1';
            
            } else if (garden[row][col] !== '*') {
              garden[row][col] = String(Number(garden[row][col]) + 1);
            }

          }

        }
      }

      }

    }
  }

  let result = [];

  for (let i = 0; i < garden.length; i++) {
    result.push(garden[i].join(''));
  }
  
  return result;
  
};
