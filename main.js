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


// $('.gameBoard').click( function() {
//     console.log('WHAT THE HELL AM I DOING?!?!?!?!')
// })
var c = 0;
$(function () {
    $('.gameBoard').click(function () {
        (c++)
        // console.log(c)
        // if(c % 2 === 0) {
        //     console.log('lasjdf');
        //     .addClass('player1')
        // }
    })
})
let x = $('.c1')
var y = Object.values(x)
// console.log(x)
// console.log(y)

$('#firstC').click(function () {
    for (i = $('.c1').length; i >= 0; i--) {
        console.log(i)
        if (c % 2 === 0) {
            if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#firstC > .c1').eq(i).addClass('player1')
                console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#firstC > .c1').eq(i).addClass('player2')
                console.log(i)
                return
            }
        }
    }
})



$('#secondC').click(function () {
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
    } else {
        $(this).text("Begin Game")
        $(this).removeClass('reset').addClass('begin')
        $('.diamond').removeClass('player1 player2')
        return c = 0;
    }
})



// $('#secondC').click(function () {
//     if (c % 2 === 0) {
//         $('.c2').addClass('player1')
//         $('.c2').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c2').addClass('player2');
//         $('.c2').removeClass('player1')
//     }
// })

// $('#thirdC').click(function () {
//     if (c % 2 === 0) {
//         $('.c3').addClass('player1')
//         $('.c3').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c3').addClass('player2');
//         $('.c3').removeClass('player1')
//     }
// })

// $('#fourthC').click(function () {
//     if (c % 2 === 0) {
//         $('.c4').addClass('player1')
//         $('.c4').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c4').addClass('player2');
//         $('.c4').removeClass('player1')
//     }
// })

// $('#fifthC').click(function () {
//     if (c % 2 === 0) {
//         $('.c5').addClass('player1')
//         $('.c5').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c5').addClass('player2');
//         $('.c5').removeClass('player1')
//     }
// })

// $('#sixthC').click(function () {
//     if (c % 2 === 0) {
//         $('.c6').addClass('player1')
//         $('.c6').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c6').addClass('player2');
//         $('.c6').removeClass('player1')
//     }
// })

// $('#seventhC').click(function () {
//     if (c % 2 === 0) {
//         $('.c7').addClass('player1')
//         $('.c7').removeClass('player2')
//     } else if (c % 2 !== 0) {
//         $('.c7').addClass('player2');
//         $('.c7').removeClass('player1')
//     }
// })