basic.forever(function () {
    basic.showNumber(8)
    basic.pause(500)
    basic.showString("hi!")
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # # #
        . . # # #
        . . # # #
        `)
})
