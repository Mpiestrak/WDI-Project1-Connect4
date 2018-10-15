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


function create () {
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

var clicks = 0;
var clickHandler = function (event) {
    // console.log('stuff: ', event);
    var column = parseInt(event.target.dataset.col, 10);
    // var bGround = event.target;
    (clicks++);
    addChits(column);
    checkWin();
    if (currentPlayer === player1) {
        currentPlayer = player2;
        // console.log(currentPlayer)
    } else {
        currentPlayer = player1;
        // console.log(currentPlayer)
    }
    // console.log(currentPlayer);
    // console.log(game)
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
            // console.log('help');
            game[rows][column] = getPlayer();
            colorChange(rows, column);
            return;
        }
    }
    // console.log(column)
    // colorChange();
}

 function colorChange (row, column) {
    var cell = $(`.row-${row} .col-${column}`);
    console.log(cell, row, column);
    if(currentPlayer === player1) {
        cell.addClass('player1');
    }
    else if(currentPlayer === player2) {
        cell.addClass('player2');
    }
}

var checkWin = function() {
    
    var maxRows = game.length;
    var row = 0;
    for(row; row < maxRows; row++) {
        // console.log('running');
        var col = 0;  
        var maxCols = game[row].length;
        for(col; col < maxCols; col++) {
            // console.log('also running')
            var winHorizontal = horizontalCheck(row, col);
            // var winVertical = checkVertical(row, col);
            // checkDiagonalTopToBottom(row, col);
            // var winDiagonalBottomToTop = checkDiagonalBottomToTop(row, col);
            if (winHorizontal === 'true') {
                alert('we won');
            }
        }
    }
    
}



var horizontalCheck = function (rowIndex, colIndex) {
    var score = 1; // number of chips in a row
    let row = game[rowIndex];
    // console.log(game)
    let val = row[colIndex]; // value of current cell
    if(val === 0){
        return false;
    }
    let col = colIndex + 1;
    for(col; col < row.length; col++) {
        if(row[col] === val) {
            // console.log('still running');
            score++;  
            console.log(score);          
        } else{
            break;
        }
    }
    if(score >= 4) {
        console.log('SUCCESSS')
        return true;
    }
    return false;
}

// var checkVertical = function(rowIndex, colIndex) {
//     var score = 1; // number of chips in a row
//     let row = game[rowIndex];
//     let val = row[colIndex]; // value of current cell
//     if(val === 0){
//         return false;
//     }
//     let currentRow = row + 1;
//     for(currentRow; currentRow < currentRow.length; currentRow++) {
        
//         const col = colIndex
//         if(row[col] === val) {
//             score++;
//         } else{
//             break;
//         }
//     }
//     if(score >= 4) {
//         return true;
//     }
//     return false;    
// }
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



// var checkHorizontal = function (column) {
//     var score = 0;
//     for (j = 5; j >= 0; j--) {
//         if (game[j][column] === 1)

//             //    console.log(game[j][column])
//             //    console.log(typeof game[j][column])
//             for (i = 0; i < 7; i++) {


//                 for (i = 0; i < 7; i++) {
//                     // var cell = document.createElement('div');
//                     // cell.setAttribute('class', `diamond col-${i}`);
//                     // cell.setAttribute('data-col', i);
//                     // // cell.setAttribute('back-color', 'white')
//                     // row.appendChild(cell);
//                 }
//             }
//     }
// }


// console.log($('[data-col]'))
// console.log($('.diamond'))



// function colorChange() {
//     var woah = `$()`
// }

// function checkWin(column) {
//     console.log(column)
//     console.log(column + 1)
//     var rows = game.length - 1;
//     for (rows; rows >= 0; rows--)
//         if (game[rows][column] === 1) {
//             console.log('woo')
//             // } && (column + 1) === 1 && (column + 2) === 1 && (column + 3 === 1)) {
//             //     alert('YOU WIN!!!!')
//         }
// }



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