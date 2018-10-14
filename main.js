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
        // cell.setAttribute('back-color', 'white')
        row.appendChild(cell);
    }
}


var clicks = 0;
var clickHandler = function (event) {
    // console.log('stuff: ', event);
    var column = parseInt(event.target.dataset.col, 10);
    // var bGround = event.target;
    (clicks++);
    addChits(column);
    checkWin(column);
    checkHorizontal()
    if (currentPlayer === player1) {
        currentPlayer = player2;
    } else {
        currentPlayer = player1;
    }
    // console.log(currentPlayer);
    // console.log(game)
};

$('.diamond').click(clickHandler);

var addChits = function (column) {
    var rows = game.length - 1;
    for (rows; rows >= 0; rows--) {
        console.log("rows: ", rows, game[rows]);
        if (game[rows][column] === 0) {
            console.log('help');
            game[rows][column] = getPlayer();
            colorChange()
            return;
        }
    }
    // console.log(column)
    // colorChange();

}

// var colorChange = function() {
//     for (i = 6; i >= 0; i--) {
//         $(`.row-${i} > [data-col='${i}']`).css("background-color", "red")
//         console.log($(`.row-${i} > [data-col='${i}']`))

//     }
// }
var checkHorizontal = function () {
    var score = 0;
    for (j = 6; j > 0; j-- || i = 0; i < 7; j++) {
        console.log('reaching j')
        for (i = 0; i < 7; j++)
            if (game[j][i] === 1)
            console.log("woodoo")
                `$('row-${j}')`
        // for (i = 0; i < 7; i++) {
        //     var cell = document.createElement('div');
        //     cell.setAttribute('class', `diamond col-${i}`);
        //     cell.setAttribute('data-col', i);
        //     // cell.setAttribute('back-color', 'white')
        //     row.appendChild(cell);
        // }
    }
}


// console.log($('[data-col]'))
// console.log($('.diamond'))

function getPlayer() {
    if (currentPlayer === player1) {
        return 1;
    }
    return 2;
}

function colorChange() {

}

function checkWin(column) {
    console.log(column)
    console.log(column + 1)
    var rows = game.length - 1;
    for (rows; rows >= 0; rows--)
        if (game[rows][column] === 1) {
            console.log('woo')
            // } && (column + 1) === 1 && (column + 2) === 1 && (column + 3 === 1)) {
            //     alert('YOU WIN!!!!')
        }
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