let x = 2
let y = 0
led.plot(x, 4)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (x > 0) {
        led.plot(x - 1, 4)
        led.unplot(x, 4)
        x -= 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (x < 4) {
        led.plot(x + 1, 4)
        led.unplot(x, 4)
        x += 1
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
            basic.showString("GAME OVER")
            control.reset()
        }
        
        y = 0
    }
    
}

basic.forever(function on_forever() {
    let posX = Math.floor(Math.random() * 10 % 5)
    for (let _ = 0; _ < 5; _++) {
        enemy(posX)
    }
})
