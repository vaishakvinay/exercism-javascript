//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {

  const bracketsleft=[
    '(',
    '{',
    '['
  ];
  const bracketsright=[
    ')',
    '}',
    ']'
  ];

   const stack = [];

  for (let i = 0; i < input.length; i++) {

    if (bracketsleft.includes(input[i])) {
      stack.push(input[i]);
    }

    if (bracketsright.includes(input[i])) {
      const last = stack.pop();

      if (last === undefined) {
        return false;
      }

      if (bracketsleft.indexOf(last) !== bracketsright.indexOf(input[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
};