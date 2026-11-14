//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const translateWord = (word) => {
  
  
  let result='';
  let vowels=['a','e','i','o','u'];

  for(let i=0;i<vowels.length;i++){
    
    if (word.startsWith(vowels[i]) || word.startsWith('xr') || word.startsWith('yt') ){

      result += word + 'ay';
      return result;
    }
  }
  
let foundVowel = false;
let consonant = '';
let remaining = '';
let j = 0;

for (; j < word.length; j++) {

  if (word[j] === 'y' && j === 0) {
  consonant = word.slice(0,1);
  remaining = word.slice(1);
  result = remaining + consonant + 'ay';
  return result;
  }

  for (let i = 0; i < vowels.length; i++) {

      if (word.startsWith('qu', j)) {
        consonant = word.slice(0, j);
        remaining = word.slice(j+2);
        result = remaining + consonant + 'quay';
        return result;
    
    }
        if (word.startsWith('y', j)) {
        consonant = word.slice(0, j);
        remaining = word.slice(j);
        result = remaining + consonant + 'ay';
        return result;
    
    }

    if (word[j] === vowels[i]) {
      foundVowel = true;
      break;
    }
  }

  if (foundVowel) {
    break;
  }
}

consonant = word.slice(0, j);
remaining = word.slice(j);

result = remaining + consonant + 'ay';
return result;

  

};

export const translate = (input) => {

  const words=input.split(' ');
  const translatedWords = [];

  for (let i=0;i<words.length;i++){

    translatedWords.push(translateWord(words[i]));

  }

return translatedWords.join(' ');

}
