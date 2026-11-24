//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message,rails) => {
  let result='';
  let currentRail = 0;
  let direction = 1;
  
  let fence = [];

  for (let j = 0; j < rails; j++) {
  fence.push([]);
  }

  for(let i=0;i<message.length;i++){
  
  fence[currentRail].push(message[i]);

    if (currentRail === rails - 1) {
    direction = -1;
  } else if (currentRail === 0) {
    direction = 1;
  }
  currentRail += direction;

}
  for (let j = 0; j < rails; j++) {
    result += fence[j].join('');
  }

  return result;
  
};

export const decode = (cryptic,rails) => {
  let result='';
  let currentRail = 0;
  let direction = 1;
  
  let pattern = [];

  for(let i=0;i<cryptic.length;i++){
  
  pattern.push(currentRail);

   if (currentRail === rails - 1) {
    direction = -1;
  } else if (currentRail === 0) {
    direction = 1;
  }
  currentRail += direction;

}


  let railCounts = Array(rails).fill(0);


  for (let i = 0; i < pattern.length; i++) {
    let rail = pattern[i];
    railCounts[rail]++;
  }
  let fence = [];
  let cipherIndex = 0;

  for (let j = 0; j < rails; j++) {
  fence.push([]);

  for (let k = 0; k < railCounts[j]; k++) {
    fence[j].push(cryptic[cipherIndex]);
    cipherIndex++;
  }
}

  let railPositions = Array(rails).fill(0);

  for (let i = 0; i < pattern.length; i++) {
    let rail = pattern[i];

    result += fence[rail][railPositions[rail]];
    railPositions[rail]++;
  }

  return result;
};
