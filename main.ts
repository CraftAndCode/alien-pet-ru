let cleans = 0
let plays = 0
let jumps = 0
soundExpression.hello.play()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    basic.pause(1)
}
soundExpression.giggle.play()
let petmood = randint(1, 4)
basic.forever(function () {
    while (petmood == 5) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
        soundExpression.soaring.playUntilDone()
        basic.pause(2000)
        petmood = randint(1, 4)
    }
})
basic.forever(function () {
    while (petmood != 5) {
        if (petmood == 1) {
            basic.clearScreen()
            proportionalFont.showString("Jump!  ", 150)
            basic.clearScreen()
            jumps = randint(4, 8)
            for (let index = 0; index <= jumps; index++) {
                basic.showNumber(jumps - index + 1)
                while (!(input.isGesture(Gesture.FreeFall))) {
                    basic.pause(1)
                }
                soundExpression.slide.playUntilDone()
            }
        } else if (petmood == 2) {
            basic.clearScreen()
            proportionalFont.showString("Play!  ", 150)
            basic.clearScreen()
            plays = randint(0, 9)
            for (let index2 = 0; index2 <= plays; index2++) {
                if (Math.randomBoolean()) {
                    basic.showArrow(ArrowNames.West)
                    while (!(input.buttonIsPressed(Button.A))) {
                        basic.pause(1)
                    }
                    music.playTone(262, music.beat(BeatFraction.Quarter))
                } else {
                    basic.showArrow(ArrowNames.East)
                    while (!(input.buttonIsPressed(Button.B))) {
                        basic.pause(1)
                    }
                    music.playTone(392, music.beat(BeatFraction.Quarter))
                }
                basic.clearScreen()
                basic.pause(100)
            }
        } else if (petmood == 3) {
            basic.clearScreen()
            proportionalFont.showString("Light!  ", 150)
            basic.clearScreen()
            while (!(input.lightLevel() >= 150)) {
                basic.pause(1)
            }
        } else if (petmood == 4) {
            basic.clearScreen()
            proportionalFont.showString("Clean!  ", 150)
            basic.clearScreen()
            cleans = randint(63, 511)
            for (let index3 = 0; index3 <= cleans; index3++) {
                led.plotBarGraph(
                index3,
                cleans
                )
                while (!(input.logoIsPressed())) {
                    music.stopAllSounds()
                    basic.showArrow(ArrowNames.North)
                    basic.clearScreen()
                    basic.pause(100)
                    index3 = 0
                }
                music.ringTone(131 + index3)
                basic.pause(10)
            }
            music.stopAllSounds()
        }
        soundExpression.happy.play()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(2000)
        soundExpression.sad.play()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(2000)
        petmood = randint(1, 5)
    }
})
