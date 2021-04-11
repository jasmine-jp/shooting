input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (x > 0) {
        led.plot(x - 1, 4)
        led.unplot(x, 4)
        x += 0 - 1
    }
    
})
function enemy(posX: number) {
    
    led.plot(posX, y)
    basic.pause(100)
    led.unplot(posX, y)
    if (y < 4) {
        y += 1
    } else {
        if (x == posX) {
            basic.showString("GAME OVER", 75)
            flag = false
        }
        
        y = 0
    }
    
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.showNumber(3, 150)
    basic.showNumber(2, 150)
    basic.showNumber(1, 150)
    basic.clearScreen()
    flag = true
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (x < 4) {
        led.plot(x + 1, 4)
        led.unplot(x, 4)
        x += 1
    }
    
})
let posX = 0
let flag = false
let y = 0
let x = 0
x = 2
basic.showString("PRESS A and B", 75)
basic.forever(function on_forever() {
    
    if (flag) {
        led.plot(x, 4)
        posX = Math.floor(Math.random() * 10 % 5)
        for (let index = 0; index < 5; index++) {
            enemy(posX)
        }
    }
    
})
