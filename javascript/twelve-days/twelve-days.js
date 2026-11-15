//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (start, end = start) => {
  const numbers = [
  'first', 'second', 'third', 'fourth',
  'fifth', 'sixth', 'seventh', 'eighth',
  'ninth', 'tenth', 'eleventh', 'twelfth'
];

const gifts = [
  'a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming'
];

 let result=[];

 for (let verse = start; verse <= end; verse++) {

  if (verse > start) {
    result.push('\n');
  }

 if(verse ===1){

  result.push(`On the ${numbers[0]} day of Christmas my true love gave to me: ${gifts[0]}.\n`);
 }

 else{
  
  result.push(`On the ${numbers[verse-1]} day of Christmas my true love gave to me:`);

   for(let i=verse-1; i>=0;i--){
    if(i===0){

    result.push(` and ${gifts[i]}.\n`);
    }
    else{

    result.push(` ${gifts[i]},`);
    }

  }
 }
}

 return result.join('')

};
