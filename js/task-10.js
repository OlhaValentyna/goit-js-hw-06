function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.querySelector("#controls");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(controlsDiv.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesDiv.append(...boxes);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}


