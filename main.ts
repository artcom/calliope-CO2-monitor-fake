function animateTo (led2: number, color: number) {
    strip.clear()
    for (let Index = 0; Index <= led2; Index++) {
        strip.setPixelColor(Index, color)
        strip.show()
        control.waitMicros(20000)
    }
}
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    animateTo(16, neopixel.rgb(44, 33, 255))
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    animateTo(12, neopixel.rgb(255, 12, 255))
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    animateTo(15, neopixel.rgb(44, 33, 0))
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    animateTo(6, neopixel.rgb(233, 0, 100))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.C10, 24, NeoPixelMode.RGB)
animateTo(12, neopixel.rgb(255, 12, 255))
basic.forever(function () {
	
})
