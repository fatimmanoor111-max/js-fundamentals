// Select elements from the page
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Variable that stores the current number
let count = 0;

// Update the number and its color on the screen
function updateDisplay() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Handle button clicks
increaseBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", function () {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
