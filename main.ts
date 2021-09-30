input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(5)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
    if (tinkercademy.PIR(DigitalPin.P1)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(2)
    }
})
