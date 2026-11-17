//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (input) => {

  const codons = [
  'AUG',
  'UUU',
  'UUC',
  'UUA',
  'UUG',
  'UCU',
  'UCC',
  'UCA',
  'UCG',
  'UAU',
  'UAC',
  'UGU',
  'UGC',
  'UGG',
  'UAA',
  'UAG',
  'UGA'
];

const proteins = [
  'Methionine',
  'Phenylalanine',
  'Phenylalanine',
  'Leucine',
  'Leucine',
  'Serine',
  'Serine',
  'Serine',
  'Serine',
  'Tyrosine',
  'Tyrosine',
  'Cysteine',
  'Cysteine',
  'Tryptophan',
  'STOP',
  'STOP',
  'STOP'
];

  let rna=input;

  let result=[];
  
  if(!rna) return [];

  for (let i=0;i<rna.length;i+=3){

    

   const currentCodon = rna.slice(i, i + 3);

   const index = codons.indexOf(currentCodon);

    if (index === -1) {
    throw new Error('Invalid codon');
    }


    const protein = proteins[index];
      
    if (protein === 'STOP') {
      break;
    }
    
    result.push(protein);

  }

  return result;




};
