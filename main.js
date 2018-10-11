// make object of each column with number as key, div as value

// Adding class player1/player2 when clicked to change background color on lowest unfilled div to correct color
var allSlots = $('.diamond')
var player1Color = []
var player2Color = []
var col1 = $('.c1')
var col2 = $('.c2')
var col3 = $('.c3')
var col4 = $('.c4')
var col5 = $('.c5')
var col6 = $('.c6')
var col7 = $('.c7')
// Button starts as 'Begin Game' but upon clicking becomes 'Reset Game' and upon clicking reverts to 'Begin Game' etc.
$('.begin').click(function() {
    if($(this).text() == "Begin Game") {
        $(this).text("Reset Game")
        $(this).removeClass('begin').addClass('reset')
    } else {
        $(this).text("Begin Game")
        $(this).removeClass('reset').addClass('begin')
    }
})

// $('.gameBoard').click( function() {
//     console.log('WHAT THE HELL AM I DOING?!?!?!?!')
// })

// $('#firstC').each(col1, function(){
//     console.log('hello');
// })


$('#firstC').click(function() {
    // console.log(col1)
    let x = document.querySelectorAll('.c1');
    console.log(x)
    x.pop();
    // for(i=0;i<col1.length;i++) {
    //   x.pop()
    // }
    console.log(x)
})