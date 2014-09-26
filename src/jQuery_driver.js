var maybeMatch = {};
var score
$(document).on('ready', function ()  {
	// $('.gameover').hide();
	$('.start_button').on('click', function () {
		score = 0 
		$('.gameover').hide();
		$('#memory_board').show();
		resetGame();
		displayBoard();
		$('span.col').removeClass('gone');
	});
	

	$('.col').on('click', function (e) {
		score ++;
		var square = e.currentTarget;
		var myRow = $(square).parent();
		var rowNum = $('.row').index(myRow[0]);
		var colNum = myRow.children().index(square);
		$($(".row")[rowNum].children[colNum]).children().removeClass('clear');
		maybeMatch = addMoves(rowNum, colNum);
	});

	$(document).on('gameOver', function() {
		console.log('GamerOver')
		$('#memory_board').hide();
		$('.gameOver').show();
	});
});