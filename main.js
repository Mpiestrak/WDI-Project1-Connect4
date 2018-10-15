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
var currentPlayer = player1;
var player1Score = 0;
var player2Score = 0;
$('.user1').html(`Player one score: ${player1Score}`);
$('.user2').html(`Player two score: ${player2Score}`);


function create() {
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
}
create();

gameOn = 'off';
var clicks = 0;
var clickHandler = function (event) {
    if (gameOn === 'off') {
        return;
    }
    var column = parseInt(event.target.dataset.col, 10);
    (clicks++);
    addChits(column);
    checkWin();
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    $('.user1').html(`Player one score: ${player1Score}`);
    $('.user2').html(`Player two score: ${player2Score}`);
};


function getPlayer() {
    if (currentPlayer === player1) {
        return 1;
    }
    return 2;
}

$('.diamond').click(clickHandler);

var addChits = function (column) {
    var rows = game.length - 1;
    for (rows; rows >= 0; rows--) {
        if (game[rows][column] === 0) {
            game[rows][column] = getPlayer();
            colorChange(rows, column);
            return;
        }
    }
}

function colorChange(row, column) {
    var cell = $(`.row-${row} .col-${column}`);
    if (currentPlayer === player1) {
        cell.addClass('player1');
    } else if (currentPlayer === player2) {
        cell.addClass('player2');
    }
}

var checkWin = function () {
    var maxRows = game.length;
    var row = 0;
    for (row; row < maxRows; row++) {
        var col = 0;
        var maxCols = game[row].length;
        for (col; col < maxCols; col++) {
            var winHorizontal = horizontalCheck(row, col);
            var winVertical = checkVertical(row, col);
            var winDiagonalLR = DiagonalRL(row, col);
            var winDiagonalRL = DiagonalLR(row, col);
            if (winHorizontal === true || winVertical === true || winDiagonalLR === true || winDiagonalRL === true) {
                gameOn = 'off';
                inARow = 1;
                if (currentPlayer === player1) {
                    player1Score++;
                    alert('Player 1 Wins!!!');
                    return;
                } else if (currentPlayer === player2) {
                    player2Score++;
                    alert('Player 2 Wins!!!');
                    return;
                }
            }
        }
    }

}



var horizontalCheck = function (rowIndex, colIndex) {
    var inARow = 1; 
    let row = game[rowIndex];
    let val = row[colIndex]; 
    if (val === 0) {
        return false;
    }
    let col = colIndex + 1;
    for (col; col < row.length; col++) {
        console.log(row[col]);
        if (row[col] === val) {
            inARow++;
        } else {
            break;
        }
    }
    if (inARow >= 4) {
        return true;
    }
    return false;
}

var checkVertical = function (rowIndex, colIndex) {
    var inARow = 1; 
    let row = game[rowIndex];
    let val = row[colIndex];
    if (val === 0) {
        return false;
    }
    let col = colIndex
    let currentRow = rowIndex - 1;
    for (currentRow; currentRow >= 0; currentRow--) {
        var row1 = game[currentRow]
        if (row1[col] === val) {
            inARow++;
        } else {
            break;
        }
    }
    if (inARow >= 4) {
        return true;
    }
    return false;
}

var DiagonalLR = function (rowIndex, colIndex) {
    var inARow = 1;
    let row = game[rowIndex];
    let val = row[colIndex];
    if (val === 0) {
        return false;
    }
    if (val === undefined) {
        return false;
    }
    let col = colIndex + 1;
    let currentRow = rowIndex - 1;
    for (currentRow, col; currentRow >= 0, col < row.length; currentRow--, col++) {
        var row1 = game[currentRow];
        if (row1 && row1[col] === val) {
            inARow++;
        } else {
            break;
        }
    }
    if (inARow >= 4) {
        return true;
    }
    return false;
}
console.log(game[0])
var DiagonalRL = function (rowIndex, colIndex) {
    var inARow = 1;
    let row = game[rowIndex];
    let val = row[colIndex];
    if (val === 0) {
        return false;
    }
    if (val === undefined) {
        return false;
    }
    let col = colIndex - 1;
    let currentRow = rowIndex - 1;
    // for(col; col>=0; col--)
    for (currentRow, col; currentRow >= 0, col >= 0; currentRow--, col--) {
        var row1 = game[currentRow];
        if (row1 && row1[col] === val) {
            inARow++;
        } else {
            break;
        }
    }
    if (inARow >= 4) {
        return true;
    }
    return false;
}

$('#theButton').click(function () {
    if ($(this).text() == "Begin Game") {
        $(this).text("Reset Game");
        $(this).removeClass('begin').addClass('reset');
        gameOn = 'on';
        currentPlayer = player1;
    } else {
        $(this).text("Begin Game");
        $(this).removeClass('reset').addClass('begin');
        gameOn = 'off';
        currentPlayer = player1;
        $('.diamond').removeClass('player1 player2');
        game = [
            [0, 0, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, ],
            [0, 0, 0, 0, 0, 0, 0, ]
        ]
    }
})