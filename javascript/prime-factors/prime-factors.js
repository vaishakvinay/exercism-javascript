//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (number) => {

  let divisor=2;
  let result = [];
  let newNumber=number;

  if (number===1)return result;
  
  for(let i=divisor; divisor<=newNumber;divisor++){
    
    while(newNumber % divisor === 0){

      newNumber/= divisor;
      result.push(divisor);

    }

  }
  return result;
};
