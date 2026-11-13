//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {
  let result='';
  let count=1;

  for(let i=0;i<input.length;i++){
    
    if (input[i]===input[i+1]){
      count++; 
    }
    else{
      if(count>1){
        result += String(count)+input[i];
      }
      else{
        result += input[i];
      }
      count=1;
    }
    

  }
  return result;

};

export const decode = (input) => {

  let count ='';
  let letter='';
  let result='';

  for(let i=0;i<input.length;i++){

    if (/[0-9]/.test(input[i])) {
      count += input[i];
    } else {

      letter+=input[i];

      if(count===''){

        result += letter;
      }
      else{

        result += letter.repeat(Number(count));

      }
      count = '';
      letter = '';

    }
    
    }
    
    return result;

};
