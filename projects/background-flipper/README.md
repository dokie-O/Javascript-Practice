# Background Flipper
A small javascript project generating hex value to randomize the website body.

## Features
- Randomly changes the background when button is clicked.
- Uses `Math.floor` & `Math.random` for randomization.
  
## GIF
![Background Flipper Demo](assets/background-flipper.gif)

## How It Works
#### 1. Hex Color Array
  - Array is used to store the hex value.
#### 2. Random Character Generator
  - Randomly select letters (a-f) or numbers (0-9) to form the hex value.
  - If/else is used to determine whether a character is a number or letter.
3. Building the Hex Code
  - A `for` loop iterates six times, pushing each randomly choosen value into the array.
  - The array is then converted into a string using `join("")` to create a valid hex color code (e.g. #ffa4a1).
4. Applying the Background Color
  - The generated hex color code is applied to page's background using `document.body.style.backgroundColor`
  - Each button click will trigger the process, making the background color random each click.

## How to Run

## Skills Practiced
- Javascript Functions
- For loop
- DOM Manipulation
- Random Number Generator
- Event Handling

## Room for Improvements
- Copy/Paste field to get the hex color.
- Simplified the 3 functions by defining a single string of hex characters (0123456789abcdef) and randomly picking from it.
- Cleaner event handling by attaching the event in JavaScript. `addEventListener`.



