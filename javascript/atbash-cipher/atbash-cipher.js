//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input) => {

let newInput=input.toLowerCase();

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let reversed = 'zyxwvutsrqponmlkjihgfedcba';
let result = '';
let groupedResult = '';

for (let i=0;i<newInput.length;i++){



  let index = alphabet.indexOf(newInput[i]);

  if (index !== -1) {
  let encoded = reversed[index];
  result += encoded;
  }
  else if (/[0-9]/.test(newInput[i])) {
  result += newInput[i];
  }
  else{
    continue;
  }

  
}

for (let j = 0; j < result.length; j += 5) {

 groupedResult += result.slice(j, j + 5) + ' ';
}

return groupedResult.trim();
  
};

export const decode = (input) => {
  let newInput=input.toLowerCase();

let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let reversed = 'zyxwvutsrqponmlkjihgfedcba';
let result = '';


for (let i=0;i<newInput.length;i++){



  let index = reversed.indexOf(newInput[i]);

  if (index !== -1) {
  let decoded = alphabet[index];
  result += decoded;
  }
  else if (/[0-9]/.test(newInput[i])) {
  result += newInput[i];
  }
  else{
    continue;
  }

  
}

return result
};
