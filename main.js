input.onButtonPressed(Button.B, function () {
    bibby += 1
    music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    bobert += 1
    music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    if (bobert == bibby) {
        music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        basic.showString("ITS A TIE!")
    }
    if (bobert < bibby) {
        basic.showString("B WINS!")
        bibby = 0
        bobert = 0
        music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
    if (bobert > bibby) {
        bibby = 0
        bobert = 0
        music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showString("A WINS!")
    }
})
let bobert = 0
let bibby = 0
bibby = 0
bobert = 0
