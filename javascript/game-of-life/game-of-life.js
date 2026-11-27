//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(input) {
    this.input = input;
  }

  tick() {
    let garden = [];

    for (let i = 0; i < this.input.length; i++) {
      let row = [];

      for (let j = 0; j < this.input[i].length; j++) {

        let liveNeighbours = 0;

        for (let row = i - 1; row <= i + 1; row++) {
          for (let col = j - 1; col <= j + 1; col++) {

            if (
              row >= 0 &&
              row < this.input.length &&
              col >= 0 &&
              col < this.input[row].length &&
              !(row === i && col === j)
            ) {
              if (this.input[row][col] === 1) {
                liveNeighbours++;
              }
            }
          }
        }

        if (this.input[i][j] === 1) {
          if (liveNeighbours === 2 || liveNeighbours === 3) {
            row.push(1);
          } else {
            row.push(0);
          }
        } else {
          if (liveNeighbours === 3) {
            row.push(1);
          } else {
            row.push(0);
          }
        }
      }

      garden.push(row);
    }

    this.input = garden;
  }

  state() {
    return this.input;
  }
}
