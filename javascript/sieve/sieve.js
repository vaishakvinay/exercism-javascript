//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = (input) => {

  let result = [];



  for(let i = 2; i <= input;i++){

  let isPrime = true;
  let marked = [];


  if(!marked.includes(i)){
  for(let j = 2; j < i; j++){

    if (i % j === 0) {
    isPrime = false;
    break;
    }

  }

  if (isPrime) {
  result.push(i);
  for(let k=2;k*i<=input;k++){
  
  marked.push(k)
  }

  }
}

}

return result;
};
