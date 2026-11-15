//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Song {

verse(number) {


  const animals = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse'
];

const descriptions = [
  '',
  'It wriggled and jiggled and tickled inside her.',
  'How absurd to swallow a bird!',
  'Imagine that, to swallow a cat!',
  'What a hog, to swallow a dog!',
  'Just opened her throat and swallowed a goat!',
  "I don't know how she swallowed a cow!",
  '',
];

const reasons = [
  '',
  'She swallowed the spider to catch the fly.',
  'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.',
  'She swallowed the cat to catch the bird.',
  'She swallowed the dog to catch the cat.',
  'She swallowed the goat to catch the dog.',
  'She swallowed the cow to catch the goat.',
  ''
];
  let result =[];

  if(number===8){
    result.push("I know an old lady who swallowed a horse.\nShe's dead, of course!\n");
    
  }

  else{

  result.push(`I know an old lady who swallowed a ${animals[number-1]}.\n`);

  if (descriptions[number - 1] !== '') {
  result.push(`${descriptions[number - 1]}\n`);
}


  for (let i = number - 1; i > 0; i--) {



  if (reasons[i] !== '') {
    result.push(`${reasons[i]}\n`);
  }
  }
  result.push("I don't know why she swallowed the fly. Perhaps she'll die.\n");
}


 
  return result.join('')
  
  }

  verses(start,end) {



  let result = [];

  for (let i = start; i <= end; i++) {
  
  result.push(this.verse(i));

  }

  return result.join('\n')+'\n';
    

    
    
  }
}
