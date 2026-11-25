//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (input,number) => {

  let result = '';

  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let position = char.charCodeAt(0);

    if (position >= 65 && position <= 90) {
      let newPosition = ((position - 65 + number) % 26) + 65;
      result += String.fromCharCode(newPosition);
    
    } else if (position >= 97 && position <= 122) {
      let newPosition = ((position - 97 + number) % 26) + 97;
      result += String.fromCharCode(newPosition);

    } else {
      result += char;
    }
  }

  return result;

};
