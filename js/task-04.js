const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let currentValue = 0;


function updateCounterDisplay() {
  counterValue.textContent = currentValue;
}


decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  updateCounterDisplay();
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  updateCounterDisplay();
});


updateCounterDisplay();
