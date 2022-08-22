// chess game

//methods used: .some(), .fill(), .map(), .abs()
//.some(), if the very first value returns true it will trigger the error
//.fill(), it was used to fill the array with "_" to build the board
//.map(), it creates a new array based on the function you pass to it
//.abs(), 

class QueenAttack {
  //default position for black and white, you're building a chess board, so you need rows and columns
  constructor({
    black: [blackRow = 0, blackColumn = 3] = [],
    white: [whiteRow = 7, whiteColumn = 3] = [],
  } = {}) {
    //putting all rows and columns at one single variable as a param
    const params = [blackRow, blackColumn, whiteRow, whiteColumn];

    //cheking with the some operator to give back the first value that meets the validation
    //players must be placed on the board and they can't share the same space.
    if (params.some((el) => el < 0 || el > 7))
      throw "Queen must be placed on the board";
    if (blackRow === whiteRow && blackColumn === whiteColumn)
      throw "Queens cannot share the same space";

    //giving white and black their default values of rows and columns
    this.white = [whiteRow, whiteColumn];
    this.black = [blackRow, blackColumn];
    
    //creating an array with 8 of space and filling it starting at index 0 with "_" to create the board
    this.board = Array(8).fill(0).map((el) => Array(8).fill("_"));
  }
   
  // creating an string so you can visualize the board
  toString() {
    //giving the row and colum values of white
    const [whiteRow, whiteColumn] = this.white;
    //giving the row and colum values of black
    const [blackRow, blackColumn] = this.black;

    //grabbing the initial board you created
    const board = this.board;

    //passing the row and colum position of white to the board and setting it to the string W
    board[whiteRow][whiteColumn] = "W";
    //passing the row and colum position of black to the board and setting it to the string B
    board[blackRow][blackColumn] = "B";

    //mapping through the board and using the join method to give some space between the " _ "
    return board.map((el) => el.join(" ")).join("\n")
  }

  //cheking if you're in position to attack
  get canAttack() {
     //giving the row and colum values of white
    const [whiteRow, whiteColumn] = this.white;
    //giving the row and colum values of black
    const [blackRow, blackColumn] = this.black;

    return (
      blackRow === whiteRow ||
      blackColumn === whiteColumn ||
      Math.abs(blackRow - whiteRow) === Math.abs(blackColumn - whiteColumn)
    );
  }
}

// const positioning = { white: [3, 0], black: [1, 0] };
const queen = new QueenAttack({white: [1, 5]});

console.log(queen.toString());
console.log(queen.canAttack)





