import time
from pyautogui import *
import pyautogui
import keyboard
import random
from Quartz.CoreGraphics import CGEventCreateMouseEvent
from Quartz.CoreGraphics import CGEventPost
from Quartz.CoreGraphics import kCGEventMouseMoved
from Quartz.CoreGraphics import kCGEventLeftMouseDown
from Quartz.CoreGraphics import kCGEventLeftMouseUp
from Quartz.CoreGraphics import kCGMouseButtonLeft
from Quartz.CoreGraphics import kCGHIDEventTap

def mouseEvent(type, posx, posy):
        theEvent = CGEventCreateMouseEvent(
                    None, 
                    type, 
                    (posx,posy), 
                    kCGMouseButtonLeft)
        CGEventPost(kCGHIDEventTap, theEvent)
def mouseclick(posx,posy):

        mouseEvent(kCGEventLeftMouseDown, posx,posy)
        mouseEvent(kCGEventLeftMouseUp, posx,posy)
while 1:
    if (pyautogui.locateOnScreen('frog.png', grayscale=True, confidence=0.5) != None):
        while 1:
            print("I can see it")
            mouseclick( 410,638) #open1st
            time.sleep(0.5)
            mouseclick( 566,519) #like
            time.sleep(0.5)
            keyboard.send('l') #like
            time.sleep(0.5)
            keyboard.send('c') #com st
            time.sleep(0.5)
            keyboard.send('w') #like
            keyboard.send('z') #like
            keyboard.send('d') #like
            keyboard.send('_') #like
            keyboard.send('N') #like
            keyboard.send('B') #like
            time.sleep(0.5)
            keyboard.send('enter') #like
            time.sleep(0.5)
            #keyboard.send('c') #like
            mouseclick( 1211,514) #next
            time.sleep(2)
    else:
        print("I cannot see it")
        time.sleep(0.5)



