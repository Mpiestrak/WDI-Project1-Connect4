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

for(i=0;i<game.length;i++) {
    var row = document.createElement('div');
    game.appendChild(row)
    // for(j=0;j<game[j].length;j++) {
    // var 
    // }
}
//  var game = document.createElement('div');
//     game.setAttribute('class', i)
//     $('#gameBoard').append(game)
}



// $('.diamond').each(function () {
//     if ($(this).is('.c1')) {
//         // for(i=1; i<=6;i++) {
//         // console.log($(this).eq(i))
//         if ($(this).eq(0).is('.player1')) {
//             console.log('yaya')
//         }
//         // }
//         // console.log($(this))
//         //     if($(this).is('.'))
//     }
// })

var c = 0;
$(function () {
    $('#game').click(function () {
        (c++)
        win()
        // console.log(c);
    })
})
var gameOn = 'off'
$('#firstC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = game.length; i >= 0; i--) {
        // console.log(i)
        if (c % 2 === 0) {
            i.value

            // if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
            //     $('#firstC > .c1').eq(i).addClass('player1')

            //     return
            // }
        } else if (c % 2 !== 0) {
            // if ($('#firstC > .c1').eq(i).css('background-color') === "rgb(255, 255, 255)") {
            //     $('#firstC > .c1').eq(i).addClass('player2')
            //     // console.log(i)
            //     return
            // }
        }
    }
    // $('.diamond').each(function () {
    //     if ($(this).is('.c1')) {
    //         console.log($(this))
    //         for (i = 6; i >= 0; i--) {
    //         // console.log('WHat')
    //         if ($(this).eq(i).is('player1')) {
    //             console.log('1')
    //             if ($('.c1').eq(i - 1).is('player1')) {
    //                 console.log('heyo')
    //                 if ($('.c1').eq(i - 2).is('player1')) {
    //                     console.log('frankly')
    //                     if ($('.c1').eq(i - 3).is('player1')) {
    //                         console.log('yay')
    //                     }
    //                 }
    //             }
    //         }

    //         // if ($(this).eq(1).is('.player1')) {

    //         // } 
    //         }
    //     }
    // })
})

$('#secondC').click(function () {
    if (gameOn === 'off') {
        return
    }
    for (i = $('.c2').length; i >= 0; i--) {
        if (c % 2 === 0) {
            if ($('#secondC > .c2').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#secondC > .c2').eq(i).addClass('player1')
                // console.log(i)
                return
            }
        } else if (c % 2 !== 0) {
            if ($('#secondC > .c2').eq(i).css('background-color') === "rgb(255, 255, 255)") {
                $('#secondC > .c2').eq(i).addClass('player2')
                // console.log(i)
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

// function win() {
//     var score = 0;

//     for (i = 42; i > 0; i--) {
//         horizontalCheckP1(i);
//         horizontalCheckP2(i);
//         verticalCheckP1(i);
//         verticalCheckP2(i);
//         diagonalCheckRLP1(i);
//         diagonalCheckRLP2(i);
//         diagonalCheckLRP1(i);
//         diagonalCheckRLP2(i);
//     }
//     // alert('YOU WINNNNNNNNN')
// }

// Button starts as 'Begin Game' but upon clicking becomes 'Reset Game' and upon clicking reverts to 'Begin Game' etc.
$('#oneButtonToRuleThemAll').click(function () {
    if ($(this).text() == "Begin Game") {
        $(this).text("Reset Game")
        $(this).removeClass('begin').addClass('reset')
        gameOn = 'on'
        $('.diamond').removeClass('player1 player2')
        return c = 0;
    } else {
        $(this).text("Begin Game")
        $(this).removeClass('reset').addClass('begin')
        $('.diamond').removeClass('player1 player2')
        gameOn = 'off'
        return c = 0;
    }
})

// If 1 is green, check if 2 is green etc.
// function horizontalCheckP1(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player1' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         score++
//         if (i - 6 > 0 && $('.' + (i - 6)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 6)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             if (i - 12 > 0 && $('.' + (i - 12)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 12)).get(0).className.split(' ')[4] !== undefined) {
//                 score++
//                 if (i - 18 > 0 && $('.' + (i - 18)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 18)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert('Player 1 wins H!!')
//                     return
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function horizontalCheckP2(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player2' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         score++
//         if (i - 6 > 0 && $('.' + (i - 6)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 6)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             if (i - 12 > 0 && $('.' + (i - 12)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 12)).get(0).className.split(' ')[4] !== undefined) {
//                 score++
//                 if (i - 18 > 0 && $('.' + (i - 18)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 18)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert('Player 2 wins! H!')
//                     return
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function verticalCheckP1(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player1' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         score++
//         if (i - 1 > 0 && $('.' + (i - 1)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 1)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             if (i - 2 > 0 && $('.' + (i - 2)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 2)).get(0).className.split(' ')[4] !== undefined) {
//                 score++
//                 if (i - 3 > 0 && $('.' + (i - 3)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 3)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert('Player 1 wins V!!')
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function verticalCheckP2(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player2' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         score++
//         if (i - 1 > 0 && $('.' + (i - 1)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 1)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             if (i - 2 > 0 && $('.' + (i - 2)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 2)).get(0).className.split(' ')[4] !== undefined) {
//                 score++
//                 if (i - 3 > 0 && $('.' + (i - 3)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 3)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert("Player 2 wins V!")
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function diagonalCheckRLP1(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player1' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         score++
//         if (i - 7 > 0 && $('.' + (i - 7)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 7)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             if (i - 14 > 0 && $('.' + (i - 14)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 14)).get(0).className.split(' ')[4] !== undefined) {
//                 score++
//                 if (i - 21 > 0 && $('.' + (i - 21)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i - 21)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert('Player 1 wins RL!!')
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function diagonalCheckRLP2(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player2' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         console.log('maybe')
//         score++
//         if (i - 7 > 0 && $('.' + (i - 7)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 7)).get(0).className.split(' ')[4] !== undefined) {
//             console.log('maybe2')
//             score++
//             if (i - 14 > 0 && $('.' + (i - 14)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 14)).get(0).className.split(' ')[4] !== undefined) {
//                 console.log('maybe3')
//                 score++
//                 if (i - 21 > 0 && $('.' + (i - 21)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i - 21)).get(0).className.split(' ')[4] !== undefined) {
//                     score++
//                     alert('Player 2 wins RL!!')
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// // LR Diagonal win check test
// function diagonalCheckLRP2(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player2' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         console.log('first')
//         score++
//         if (i + 5 < 42 && $('.' + (i + 5)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i + 5)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             console.log('helododl')
//             if (i + 10 < 42 && $('.' + (i + 10)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i + 10)).get(0).className.split(' ')[4] !== undefined) {
//                 console.log('second')
//                 score++
//                 if (i + 15 < 42 && $('.' + (i + 15)).get(0).className.split(' ')[4] === 'player2' && $('.' + (i + 15)).get(0).className.split(' ')[4] !== undefined) {
//                     console.log('third')
//                     score++
//                     alert('Player 2 wins diag!!')
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }

// function diagonalCheckLRP1(i) {
//     var score = 0;
//     if ($('.' + i).get(0).className.split(' ')[4] === 'player1' && $('.' + i).get(0).className.split(' ')[4] !== undefined && i > 0) {
//         // console.log('first')
//         score++
//         if (i + 5 < 42 && $('.' + (i + 5)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i + 5)).get(0).className.split(' ')[4] !== undefined) {
//             score++
//             // console.log('P1second')
//             if (i + 10 < 42 && $('.' + (i + 10)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i + 10)).get(0).className.split(' ')[4] !== undefined) {
//                 // console.log('P1third')
//                 score++
//                 if (i + 15 < 42 && $('.' + (i + 15)).get(0).className.split(' ')[4] === 'player1' && $('.' + (i + 15)).get(0).className.split(' ')[4] !== undefined) {
//                     // console.log('third')
//                     score++
//                     alert('Player 1 wins diag!!')
//                 } else {
//                     score = 0
//                 }
//             } else {
//                 score = 0
//             }
//         } else {
//             score = 0
//         }
//     } else {
//         score = 0;
//     }
// }