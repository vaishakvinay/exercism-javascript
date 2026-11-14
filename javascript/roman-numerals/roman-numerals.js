//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (input) => {
  let number=input;
  let result='';


  const values = [
  1000, 900, 500, 400,
  100, 90, 50, 40,
  10, 9, 5, 4, 1
  ];

  const symbols = [
  'M', 'CM', 'D', 'CD',
  'C', 'XC', 'L', 'XL',
  'X', 'IX', 'V', 'IV', 'I'
  ];


  for (let i = 0; i < values.length; i++){

    while(number>=values[i]){

      number -=values[i];
      result +=symbols[i];

    }



  }

  return result;


};
