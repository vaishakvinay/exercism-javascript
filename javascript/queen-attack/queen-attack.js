//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0,3],
    white: [whiteRow, whiteColumn] = [7,3]
  } = {}) {

    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
    this.whiteRow = whiteRow;
    this.whiteColumn = whiteColumn;
    this.blackRow = blackRow;
    this.blackColumn = blackColumn;

    if (
      whiteRow < 0 || whiteRow > 7 ||whiteColumn < 0 || whiteColumn > 7 ||blackRow < 0 || blackRow > 7 ||blackColumn < 0 || blackColumn > 7
    ) {
      throw new Error('Queen must be placed on the board');
    }

    if (whiteRow === blackRow && whiteColumn === blackColumn) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString() {

  const board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];

  for (let j = 0; j < 8; j++) {

    if (i === this.whiteRow && j === this.whiteColumn) {
      board[i][j] = 'W';
    } else if (i === this.blackRow && j === this.blackColumn) {
      board[i][j] = 'B';
    } else {
      board[i][j] = '_';
    }

  }
}
  let result = '';
  for (let i = 0; i < 8; i++) {
  result += board[i].join(' ');

    if (i < 7) {
    result += '\n';
  }
  }
  return result;
  }

  get canAttack() {

    return (this.blackRow === this.whiteRow ||this.blackColumn === this.whiteColumn ||Math.abs(this.blackRow - this.whiteRow) ===Math.abs(this.blackColumn - this.whiteColumn));
    

  }
}
