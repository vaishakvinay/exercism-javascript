//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {


  let result = [];
  let maxLength=0;

  for(let i=0;i<input.length;i++){

    if(input[i].length > maxLength){

      maxLength =input[i].length;
    }

  }

  for (let col = 0; col < maxLength; col++) {
  let row = '';

  for (let i = 0; i < input.length; i++) {

    if (col < input[i].length) {
      row += input[i][col];
    } else {
      
      for (let j = i + 1; j < input.length; j++) {

        if (col < input[j].length){
          row +=' '
          break;
        }
    }

  }
}

  result.push(row);
}
  return result;

};
