input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.clearScreen()
})
basic.showIcon(IconNames.SmallDiamond)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.SmallHeart)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Heart)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.SmallDiamond)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.SmallHeart)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Heart)
music.playTone(131, music.beat(BeatFraction.Whole))
basic.showIcon(IconNames.Heart)
music.playTone(523, music.beat(BeatFraction.Double))
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.forever(function () {
    basic.clearScreen()
    basic.showLeds(`
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        `)
    basic.clearScreen()
    for (let index = 0; index < randint(1, 3); index++) {
        basic.showString("John")
        basic.showString("from Microsoft")
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # #
            . . # # #
            . . # # #
            `)
        basic.pause(4000)
        basic.clearScreen()
        if (Math.randomBoolean()) {
            basic.clearScreen()
            basic.showIcon(IconNames.Ghost)
            basic.pause(1000)
            basic.clearScreen()
        }
    }
    basic.showString("I")
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("MakeCode")
    basic.clearScreen()
})
