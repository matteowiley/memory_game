var board = []; 
var playaMatch = 0;

var resetGame = function () {

  board = [
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
    [' 0 ', ' 0 ', ' 0 ', ' 0 ', ' 0 '],
  ];

  var populate = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'N', 'N', 'O', 'O'];
  shuffleBoard(populate);
  board = populateTable(board, populate);
};

var shuffleBoard = function (gameArray) {
    for (var i = gameArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = gameArray[i];
      gameArray[i] = gameArray[j];
      gameArray[j] = temp;
    }
    return gameArray;
};

var populateTable = function (board, populate) {
	for (var row = 0; row < board.length; row++) {
		for (var sqr = 0; sqr < board[0].length; sqr++) {
			board[row][sqr] = populate.pop();
		}
	};
	return board; 
}

var addMoves = function (rowNum, colNum) {
    if (Object.keys(maybeMatch).length === 0) {
      maybeMatch['row1'] = rowNum;
      maybeMatch['col1'] = colNum;
      // console.log(maybeMatch.row1, maybeMatch.col1);
    } else  {
      maybeMatch['row2'] = rowNum;
      maybeMatch['col2'] = colNum;
      console.log(maybeMatch.row2, maybeMatch.col2);
      attemptMatch(maybeMatch.row1, maybeMatch.col1, maybeMatch.row2, maybeMatch.col2);
      maybeMatch = {};
    }
    return maybeMatch;
};

var attemptMatch = function (row1, col1, row2, col2) {
  setTimeout(function() {
    console.log(board[row1][col1]);
    if (row1 == row2 && col1 == col2) {
      $($(".row")[row1].children[col1]).children().addClass('clear');
      $($(".row")[row2].children[col2]).children().addClass('clear');
    } else if (board[row1][col1] === board[row2][col2]) {
  		removeMatch(row1, col1, row2, col2);
  	} else {
      $($(".row")[row1].children[col1]).children().addClass('clear');
      $($(".row")[row2].children[col2]).children().addClass('clear');
    }
  }, 1000);
};


var removeMatch = function (row1, col1, row2, col2) {
  board[row1][col1] = ' 0 ';
  board[row2][col2] = ' 0 ';
  displayBoard();
}

var displayBoard = function () {
    checkGameOver();
    for (var row = 0; row < board.length; row++) {
      for (var col = 0; col < board[row].length; col++) {
        if (board[row][col] == 'A') { // ' 0 ', 'red', 'wht'
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/A.jpg'>"); 
        } else if (board[row][col] == 'B') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/B.jpg'>"); 
        } else if (board[row][col] == 'C') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/C.jpg'>");
        } else if (board[row][col] == 'D') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/D.jpg'>");
        } else if (board[row][col] == 'E') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/E.jpg'>");
        } else if (board[row][col] == 'F') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/F.jpg'>");
        } else if (board[row][col] == 'G') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/G.jpg'>");
        } else if (board[row][col] == 'H') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/H.jpg'>");
        } else if (board[row][col] == 'I') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/I.jpg'>");
        } else if (board[row][col] == 'J') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/J.jpg'>");
        } else if (board[row][col] == 'K') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/K.jpg'>");
        } else if (board[row][col] == 'L') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/L.jpg'>");
        } else if (board[row][col] == 'M') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/M.jpg'>");
        } else if (board[row][col] == 'N') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/N.jpg'>");
        } else if (board[row][col] == 'O') {
          $($(".row")[row].children[col]).html("<img class='clear' src='/Users/matteowiley/Desktop/memory_images/img_1/O.jpg'>");
        } else if (board[row][col] == ' 0 '){
          $($(".row")[row].children[col]).addClass('gone').html("");
        }
      }
    }
};

var checkGameOver = function () {
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board[row].length; col++) {
      if (board[row][col] !== ' 0 ') {
        return false;
      }
    }
  }
  $(document).trigger('gameOver', board);
  return true;
};










