/**
 * 210930 무선침입자시스템
 */
radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P1, receivedNumber * 경비전원)
    music.setVolume(receivedNumber * 경비전원)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    경비전원 = 1
})
input.onButtonPressed(Button.B, function () {
    경비전원 = 0
})
let 경비전원 = 0
radio.setGroup(5)
basic.forever(function () {
	
})
basic.forever(function () {
    radio.sendNumber(pins.digitalReadPin(DigitalPin.P0))
})
