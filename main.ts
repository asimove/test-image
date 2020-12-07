basic.forever(function () {
    basic.pause(1000)
    images.createBigImage(`
        # . . . . . # . . .
        . # . . . . # . # .
        . . # . . . # . . .
        . . # . . . . # . .
        # . # . . . . . # .
        `).scrollImage(5, 200)
})
