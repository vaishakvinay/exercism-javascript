//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,candidates) => {
  let result=[];

  for(let i=0 ; i<candidates.length ; i++){

    if (candidates[i].toLowerCase()===target.toLowerCase()){

      continue;
    }
    if  (candidates[i].toLowerCase().split('').sort().join('') ===
      target.toLowerCase().split('').sort().join('')){

      result.push(candidates[i]);

    }

  }
  
return result;

};
