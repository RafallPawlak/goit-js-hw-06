const changeButton = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const colorName = document.querySelector(".color");

changeButton.addEventListener("click", (changeColor));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyElement.style.backgroundColor = `${getRandomHexColor()}`;
  colorName.textContent = getRandomHexColor();
}