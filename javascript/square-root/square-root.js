//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (number) => {

  if(number===1){
    return 1;
  }
  for(let i=1;i<=number;i++){
    if(i*i===number){
      return i;
    }
  }
  
};
