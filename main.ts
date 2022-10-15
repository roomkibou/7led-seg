let _7seg = 0
pins.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
pins.spiFormat(8, 3)
pins.spiFrequency(1000000)
let 配列 = [
63,
6,
91,
79,
102,
109,
125,
7,
127,
111,
95,
124,
88,
94,
123
]
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 15; カウンター++) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        _7seg = pins.spiWrite(配列[カウンター])
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(1000)
    }
})
