let foto = 0
basic.forever(function () {
    foto = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(foto)
    if (foto == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
