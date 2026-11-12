//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  
  const original = BigInt(num);
  let number = original;
  let count=0n;
  let digit=0n;
  let sum=0n;

  for(;number>0n ; number = number / 10n){
    
   count++;

  }

  number = original;

  for(;number>0n ; number = number / 10n){
    
   digit = number % 10n;
   sum += digit**count;

  }

  return original === sum;

};
