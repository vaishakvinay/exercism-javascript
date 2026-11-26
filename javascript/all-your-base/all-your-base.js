//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, inputBase, outputBase) => {
  
  let result=[];
  
  let value = 0;

  let power=digits.length - 1;

  if (!Number.isInteger(inputBase) || inputBase < 2) {
  throw new Error('Wrong input base');
  }

  if (!Number.isInteger(outputBase) || outputBase < 2) {
  throw new Error('Wrong output base');
  }

  if (
    !Array.isArray(digits) || digits.length === 0 ||(digits.length > 1 && digits[0] === 0) ||
    digits.some(digit =>!Number.isInteger(digit) ||
    digit < 0 ||
    digit >= inputBase
  )
  ) {
  throw new Error('Input has wrong format');
  }

  for(let i=0;i<digits.length;i++){

    value += digits[i]*(inputBase**power);
    power--;
  
  }

  let remainder=[];

  if (value === 0) {
  return [0];
  }

  while(value > 0){

    remainder.push(value % outputBase);
    value = Math.floor(value / outputBase);
  }

  result=remainder.reverse();
  return result;

};
