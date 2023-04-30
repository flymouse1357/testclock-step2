let ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
ds.DateTime(
2021,
3,
29,
1,
9,
45,
0
)
basic.forever(function () {
    basic.showString("" + ds.getYear() + "-" + ds.getMonth() + "-" + ds.getDay() + "" + ds.getHour() + ":" + ds.getMinute() + ":" + ds.getSecond())
})
