let c = 0
let strip = neopixel.create(DigitalPin.C10, 24, NeoPixelMode.RGB)
strip.showBarGraph(0, 255)
basic.forever(function () {
    strip.showBarGraph(c, 255)
    c += 1
    if (c == 255) {
        c = 0
    }
})
