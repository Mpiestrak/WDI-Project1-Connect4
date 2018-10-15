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
    horizontalCheck(column);
    if (currentPlayer === player1) {
        currentPlayer = player2;
        console.log(currentPlayer)
    } else {
        currentPlayer = player1;
        console.log(currentPlayer)
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

for (j = 0; j < 6; j++) {
    
    // var row = document.createElement('div');
    // row.setAttribute('class', `row-${j} row`);
    // var gameBoard = document.getElementById('gameBoard');
    // gameBoard.appendChild(row);
    for (i = 0; i < 7; i++) {
        // var cell = document.createElement('div');
        // cell.setAttribute('class', `diamond col-${i}`);
        // cell.setAttribute('data-col', i);
        // // cell.setAttribute('back-color', 'white')
        // row.appendChild(cell);
    }
}

// var horizontalCheck = function (column) {
//     var score = 0;
//     var rows = game.length - 1;
//     for (rows; rows >= 0; rows--) {
//         var cell = game[rows][column];
//         // console.log("rows: ", rows, game[rows]);
//         if (game[rows][column] === 1) {
//             score++
//             console.log('first')
//             if ((game[rows][column] + 1) === 1) {
//                 score++
//                 console.log('second')
//                 if (cell + 2 === 1) {
//                     score++
//                     console.log('third')
//                     if (cell + 3 === 1) {
//                         score++
//                         alert('player wins!!')
//                         return
//                     } else {
//                         score = 0;
//                     }
//                 } else {
//                     score = 0;
//                 }
//             } else {
//                 score = 0;
//             }
//         } else {
//             score = 0;
//         }
//     }
// }
// for (i = game.length -1; i >= 0; i--) {
//     for(j=0; j<7;j++){
//         if(game[i][column] === 1){
//     $(`.row-${i} > [data-col='${j}']`).css("background-color", "red")
//     console.log($(`.row-${i} > [data-col='${i}']`))
// }

var color
$(`.row-${j} > .col-${i}`)
var checkHorizontal = function (column) {
    var score = 0;
    for (j = 5; j >= 0; j--) {
        if (game[j][column] === 1)

            //    console.log(game[j][column])
            //    console.log(typeof game[j][column])
            for (i = 0; i < 7; i++) {


                // for (i = 0; i < 7; i++) {
                //     var cell = document.createElement('div');
                //     cell.setAttribute('class', `diamond col-${i}`);
                //     cell.setAttribute('data-col', i);
                //     // cell.setAttribute('back-color', 'white')
                //     row.appendChild(cell);
                // }
            }
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