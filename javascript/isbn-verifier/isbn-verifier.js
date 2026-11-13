//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  let input = isbn.replaceAll("-","");
  let count = 10;
  let digit;
  let sum=0;

  if(input.length===10){

    for (let i=0;i<input.length;i++){
      
      if(/[0-9]/.test(input[i])){

        digit = Number(input[i]);
        
      }

      else{
        if(input[i] === 'X' && i === input.length - 1){
          digit=10;
        }
      else {
        return false;
      }
      }

      sum+=digit*count;
      count--

    }
  }
  else {
        return false;
  }

  return sum % 11===0;

};
