const sizeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

sizeInput.addEventListener("input", (event) => {
    output.style.fontSize = `${event.target.value}px`;
});

