// ---------- SCOPE ----------
let globalVar = "I am global";

function scopeDemo() {
  let functionVar = "I am inside the function";

  if (true) {
    let blockVar = "I am inside the block";
    console.log(blockVar);       // works
  }

  console.log(globalVar);        // works (global is visible everywhere)
  console.log(functionVar);      // works
  // console.log(blockVar);      // ReferenceError: blockVar is not defined
}
scopeDemo();

// ---------- CLOSURE ----------
// The inner function remembers 'count' even after makeCounter has finished
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate counter, its own 'count')

// ---------- HOISTING ----------
// 1) var is hoisted, but its value is not
console.log(a); // undefined
var a = 5;

// 2) function declarations are fully hoisted
sayHello();     // works
function sayHello() {
  console.log("Hello!");
}

// 3) let and const are in the "temporal dead zone" before their line
try {
  console.log(b);
  let b = 10;
} catch (error) {
  console.log("Error:", error.message); // Cannot access 'b' before initialization
}

// 4) function expressions are NOT hoisted like declarations
try {
  greet();
  var greet = function () { console.log("Hi"); };
} catch (error) {
  console.log("Error:", error.message); // greet is not a function
}
