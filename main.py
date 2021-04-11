def on_button_pressed_a():
    global x
    if x > 0:
        led.plot(x - 1, 4)
        led.unplot(x, 4)
        x += 0 - 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def enemy(posX: number):
    global y, flag
    led.plot(posX, y)
    basic.pause(100)
    led.unplot(posX, y)
    if y < 4:
        y += 1
    else:
        if x == posX:
            basic.show_string("GAME OVER", 75)
            flag = False
        y = 0

def on_button_pressed_ab():
    global flag
    basic.show_number(3, 150)
    basic.show_number(2, 150)
    basic.show_number(1, 150)
    basic.clear_screen()
    flag = True
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global x
    if x < 4:
        led.plot(x + 1, 4)
        led.unplot(x, 4)
        x += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

posX = 0
flag = False
y = 0
x = 0
x = 2
basic.show_string("PRESS A and B", 75)

def on_forever():
    global posX
    if flag:
        led.plot(x, 4)
        posX = Math.floor(Math.random() * 10 % 5)
        for index in range(5):
            enemy(posX)
basic.forever(on_forever)
