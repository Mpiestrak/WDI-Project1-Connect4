// make object of each column with number as key, div as value

// Adding class player1/player2 when clicked to change background color on lowest unfilled div to correct color
var game = [
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, ]
]

var player1 = 'Player 1';
var player2 = 'Player 2';
var currentPlayer = player1


for (j = 0; j < 6; j++) {
    var row = document.createElement('div');
    row.setAttribute('class', `row-${j} row`);
    var gameBoard = document.getElementById('gameBoard');
    gameBoard.appendChild(row);
    for (i = 0; i < 7; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('class', `diamond col-${i}`);
        cell.setAttribute('data-col', i);
        row.appendChild(cell);
    }
}


var clicks = 0;
var clickHandler = function (event) {
    // console.log('stuff: ', event);
    var column = parseInt(event.target.dataset.col, 10);
    // console.log(column);
    (clicks++);
    addChits(column);
    // checkWin()
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    console.log(currentPlayer);
    console.log(game)
};

$('.diamond').click(clickHandler);

var addChits = function (column) {
    // console.log("column: ", column)
    var rows = game.length - 1;
    for (rows; rows >= 0; rows--) {
        console.log("rows: ", rows, game[rows]);
        if (game[rows][column] === 0) {
            // console.log('help');
            game[rows][column] = getPlayer();
            return;
        }
    }
}

function getPlayer() {
    if (currentPlayer === player1) {
        return 1;
    }
    return 2;
}



$('#oneButtonToRuleThemAll').click(function () {
    if ($(this).text() == "Begin Game") {
        $(this).text("Reset Game");
        $(this).removeClass('begin').addClass('reset');
        gameOn = 'on';
        currentplayer = player1;
        return clicks = 0;
    } else {
        $(this).text("Begin Game");
        $(this).removeClass('reset').addClass('begin');
        gameOn = 'off';
        currentplayer = player1;
        return clicks = 0;
    }
})

// $('.0').click(function() {
// $.each(this, function() {
//     console.log('each');
//     // innerArr[0].reverse()
//     if($('.0').value === 0) {
//         console.log('yay');
//         $('.0').val() = 1;
//         console.log($('.0'));
//         return
//     }
// })
// })