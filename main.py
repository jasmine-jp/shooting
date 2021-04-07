x = 2
y = 0
led.plot(x, 4)

def on_button_pressed_a():
    global x
    if x > 0:
        led.plot(x-1, 4)
        led.unplot(x, 4)
        x -= 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    if x < 4:
        led.plot(x+1, 4)
        led.unplot(x, 4)
        x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def enemy(posX):
    global y
    led.plot(posX, y)
    basic.pause(100)
    led.unplot(posX, y)
    if y < 4:
        y += 1
    else:
        if x == posX:
            basic.show_string("GAME OVER")
            control.reset()
        y = 0

def on_forever():
    posX = Math.floor(Math.random()*10%5)
    for _ in range(5):
        enemy(posX)
basic.forever(on_forever)