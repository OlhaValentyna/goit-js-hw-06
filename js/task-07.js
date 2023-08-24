const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

function changeSize() {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("input", changeSize);

changeSize();