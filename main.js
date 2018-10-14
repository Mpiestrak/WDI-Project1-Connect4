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

// for(i=0;i<1;i++) {
//     var game = document.createElement('array');
//     console.log('test')
//     game.setAttribute('class', 'mainAr')
//     gameBoard.appendChild(game)
for (j = 0; j < 6; j++) {
    var row = document.createElement('div');
    row.setAttribute('class', `row-${j} row`);
    var gameBoard = document.getElementById('gameBoard');
    gameBoard.appendChild(row);
    for (i = 0; i < 7; i++) {   
        var cell = document.createElement('div');
        cell.setAttribute('class', `diamond col-${i}`);
        row.appendChild(cell);
    }
}
// }

var clicks = 0;
$(function () {
    $('#gameBoard').click(function () {
        (clicks++);
        // console.log(c);
    })
})

$('.0').click(function() {
$.each(this, function() {
    console.log('each');
    // innerArr[0].reverse()
    if($('.0').value === 0) {
        console.log('yay');
        $('.0').val() = 1;
        console.log($('.0'));
        return
    }
})
})
