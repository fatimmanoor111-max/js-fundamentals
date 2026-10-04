# JavaScript Fundamentals

A small collection of JavaScript demos that I built to practice the core basics of JavaScript: variables, functions, DOM manipulation, events, arrays, objects and promises.

## Demos

| Demo | What it does | Concepts used |
|---|---|---|
| [Counter](./01-counter) | Increase, decrease and reset a number with buttons | DOM selection, click events, variables |
| [To-Do List](./02-todo) | Add, complete and delete tasks | Arrays, objects, createElement, event delegation |
| [Quiz](./03-quiz) | Multiple-choice quiz with a score at the end | Arrays of objects, functions, conditions |

## Concept Files

- [scope-closures-hoisting.js](./concepts/scope-closures-hoisting.js): examples of scope, closures and hoisting
- [promises.js](./concepts/promises.js): examples of callbacks, promises and async/await

## How to Run

1. Clone the repo:
```
   git clone https://github.com/fatimmanoor111-max/js-fundamentals.git
```
2. Open any demo folder (for example `01-counter`).
3. Open `index.html` in your browser.

No installation is needed.

## What I Learned

- **Scope:** a variable can only be used in the place where it is declared (global, function or block).
- **Closures:** a function remembers the variables from the place where it was created, even after the outer function has finished.
- **Hoisting:** declarations are moved to the top before the code runs. `var` becomes `undefined`, while `let` and `const` give an error if used too early.
- **DOM and events:** how to select elements, change them, and respond to clicks and inputs.
- **Promises:** a promise gives a result later. It can be pending, fulfilled or rejected. I used `.then()`, `.catch()` and `async/await` to handle it.

## Challenges

[Write 1-2 lines about something that was difficult, for example: "At first I found closures confusing, but writing the counter example helped me understand it."]

## Tools Used

HTML, CSS, JavaScript, Git and GitHub

## Author

Noor Fatima
GitHub: [fatimmanoor111-max](https://github.com/fatimmanoor111-max)
