const addButton = document.querySelector('button[data-create]');
const delButton = document.querySelector('button[data-destroy]');
const count = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let amount = 0;

count.addEventListener("input", element => handelInput(element));
addButton.addEventListener("click", () => createBoxes(amount));
delButton.addEventListener("click", () => destroyBoxes(amount));

function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1, boxSize += 10){
    const container = document.createElement("div");
    container.style.height = `${boxSize}px`;
    container.style.width = `${boxSize}px`;
    container.style.backgroundColor = getRandomHexColor();
    boxes.append(container);
  }
}

function destroyBoxes() {
  boxes.textContent = '';
}

function handelInput(element) {
  amount = element.target.value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
