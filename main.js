// make object of each column with number as key, div as value

// Adding class player1/player2 when clicked to change background color on lowest unfilled div to correct color


// $('.gameBoard').click( function() {
//     console.log('WHAT THE HELL AM I DOING?!?!?!?!')
// })
// var game = [
//     [0, 0, 0, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 0, 0, 0, ],
//     [0, 0, 0, 0, 0, 0, 0, ]
// ]

// for(i=0;i<42;i++) {
//  var pieces = document.createElement('div');
//     pieces.className = 'diamond';
//     document.getElementById('game').appendChild(pieces)
// }

// var arr = [[$('.r1.c1'), $('.r1.c2'), $('.r1.c3'), $('.r1.c4'), $('.r1.c5'), $('.r1.c6'), $('.r1.c7')],
//         [$('.r2.c1'), $('.r2.c2'), $('.r2.c3'), $('.r2.c4'), $('.r2.c5'), $('.r2.c6'), $('.r2.c7')],
//         [$('.r3.c1'), $('.r3.c2'), $('.r3.c3'), $('.r3.c4'), $('.r3.c5'), $('.r3.c6'), $('.r3.c7')]]
// console.log($('.r1.c1'))
// var arr1 = [$('.r1.c1'), $('.r1.c2'), $('.r1.c3'), $('.r1.c4'), $('.r1.c5'), $('.r1.c6'), $('.r1.c7')]

// i --   j--

// $('.diamond').each(function() {
//     // console.log($(this))
//     if($(this).is('.c1.r1') || $(this).is('.c1.r2') || $(this).is('.c1.r3') || $(this).is('.c1.r4')) {
//         // console.log('yay')
//         // console.log($(this))
//         $(this).css('background', 'blue')
//     } else {
//         // console.log('conditional did not pass')
//     }
// })



var c = 0;
$(function () {
    $('#game').click(function () {
        (c++)
        console.log(c);
    })
})
var gameOn = 'off'

$('#firstC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c1').length; i >= 0; i--) {
        // console.log(i)
        if (c % 2 === 0) {
            if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#firstC > .c1').eq(i).addClass('player1')
                $('#firstC > .c1').eq(i).val('1')
                // console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#firstC > .c1').eq(i).addClass('player2')
                // console.log(i)
                return
            }
        }
    }
})

$('#secondC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c2').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#secondC > .c2').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#secondC > .c2').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#secondC > .c2').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#secondC > .c2').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

$('#thirdC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c1').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#thirdC > .c3').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#thirdC > .c3').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#thirdC > .c3').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#thirdC > .c3').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

$('#fourthC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c4').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#fourthC > .c4').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#fourthC > .c4').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#fourthC > .c4').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#fourthC > .c4').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

$('#fifthC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c5').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#fifthC > .c5').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#fifthC > .c5').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#fifthC > .c5').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#fifthC > .c5').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

$('#sixthC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c6').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#sixthC > .c6').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#sixthC > .c6').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#sixthC > .c6').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#sixthC > .c6').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

$('#seventhC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c7').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#seventhC > .c7').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#seventhC > .c7').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#seventhC > .c7').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#seventhC > .c7').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})

// Button starts as 'Begin Game' but upon clicking becomes 'Reset Game' and upon clicking reverts to 'Begin Game' etc.
$('#oneButtonToRuleThemAll').click(function () {
    if ($(this).text() == "Begin Game") {
        $(this).text("Reset Game")
        $(this).removeClass('begin').addClass('reset')
        gameOn = 'on'
        return c = 0;
    } else {
        $(this).text("Begin Game")
        $(this).removeClass('reset').addClass('begin')
        $('.diamond').removeClass('player1 player2')
        return c = 0;
    }
})



// If 1 is green, check if 2 is green etc.