//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {


  let result = [];

  for (let i = 0; i < matrix.length; i++) {

   
    let rowMax = Math.max(...matrix[i]);

    
    for (let c = 0; c < matrix[i].length; c++) {

      if (matrix[i][c] === rowMax) {

        let column = [];

       
        for (let j = 0; j < matrix.length; j++) {
          column.push(matrix[j][c]);
        }

        
        let columnMin = Math.min(...column);

        
        if (rowMax === columnMin) {
          result.push({ row: i + 1, column: c + 1 });
        }
      }
    }
  }

  return result;
};
