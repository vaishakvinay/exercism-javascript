//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (magicalItems,level) => {

  let multiples=[];
  
  let total=0;

  for(let i=0;i<magicalItems.length;i++){

    const item = magicalItems[i];
    if (item <= 0) {
        continue;
       }
    let number=1;

    for (;(item*number)<level;number+=1){

      if (!multiples.includes((item*number))){

      multiples.push(item*number);
    }
  }
}
  
  for (let i = 0; i < multiples.length; i++) {
  total += multiples[i];
  }

return total;


  

};
