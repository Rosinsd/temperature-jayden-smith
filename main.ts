let Current_temperature = 0
/**
 * Created by Jayden Smith
 * 
 * December 15 2023 
 * 
 * This code tells the temperature
 */
basic.forever(function () {
    Current_temperature = input.temperature()
    basic.showNumber(Current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
