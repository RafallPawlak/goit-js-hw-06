let counterValue = 0;

const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const actValue = document.querySelector("#value");

const countDecr = function() {
    counterValue -= 1;
    actValue.textContent = counterValue; 
};    
    
const countIncr = function() {
    counterValue += 1;
    actValue.textContent = counterValue; 
};    

decr.addEventListener("click", countDecr);
incr.addEventListener("click", countIncr);