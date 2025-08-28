# Background Flipper
A small javascript project generating hex value to randomize the website body.

## Features
- Randomly changes the background when button is clicked.
- Uses `Math.floor` & `Math.random` for randomization.
  
## GIF
![Background Flipper Demo](assets/background-flipper.gif)

## How It Works
Functions is use to generate letters(a-f) and generate numbers(0-9) using `Math.floor` & `Math.random`.

A function to generate a number or a letter (1 or 0).
```javscript
function generateRandomCharNum() {
    let random = Math.floor(Math.random() * 2);

    if (random == 1) {
        return generateLetter();
    } else {
        return generateNumber();
    }
}

```
## How to Run
## Skills Practiced
## Room for Improvements
