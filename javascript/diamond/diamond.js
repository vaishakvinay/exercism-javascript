//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  
  let distance = letter.charCodeAt(0) - 'A'.charCodeAt(0);

  let result = [];

  for (let i = 0; i <= distance;i++) {
  
    let row = [];

    let leftPosition = distance - i;
    let rightPosition = distance + i;

    let char = String.fromCharCode('A'.charCodeAt(0) + i);

    for (let j=0; j< distance+(distance+1);j++){

      if(j===leftPosition || j=== rightPosition ){

        row.push(char);
      }
      else{
        row.push(' ');

      }
    }

    result.push(row.join(''));

  }

  for(let i=distance-1;i>=0;i--){
    result.push(result[i]);
  }

  return result;
};
