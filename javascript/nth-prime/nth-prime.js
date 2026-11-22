//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const prime = (input) => {

  let result = [];
 

  if(input===0)throw new Error('there is no zeroth prime');


  for(let newNumber = 2; result.length < input;newNumber++){

    let isPrime = true;
    
  for(let divisor = 2; divisor < newNumber; divisor++){

    if (newNumber % divisor === 0) {
    isPrime = false;
    break;
    }
  
  };

  if (isPrime) {
  result.push(newNumber);
}

};

  return result[input-1];
};
