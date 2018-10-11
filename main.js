// make object of each column with number as key, div as value

// Adding class player1/player2 when clicked to change background color on lowest unfilled div to correct color
var allSlots = $('.diamond')
var player1Color = []
var player2Color = []
var column1 = $('.c1')
var column2 = $('.c2')
var column3 = $('.c3')
var column4 = $('.c4')
var column5 = $('.c5')
var column6 = $('.c6')
var column7 = $('.c7')

// Button starts as 'Begin Game' but upon clicking becomes 'Reset Game' and upon clicking reverts to 'Begin Game' etc.
$('#reset').click(function() {
    if($(this).text() == "Begin Game") {
        $(this).text("Reset Game")
    } else {
        $(this).text("Begin Game")
    }
})

$('.gameBoard').click( function() {
    console.log('WHAT THE HELL AM I DOING?!?!?!?!')
    
})