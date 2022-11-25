import {
  count,
  subtractButton,
  addButton,
  resetButton,
  bottom,
} from "./modules/getElements.mjs";
import { counter } from "./modules/counter.mjs";
import { mode } from "./modules/mode.mjs";

//Print number on to page
function printCount() {
  count.innerText = counter.value;
}

//Handle Events
subtractButton.addEventListener("click", () => {
  counter.decreaseCount();
  printCount();
});

addButton.addEventListener("click", () => {
  counter.increaseCount();
  printCount();
});

resetButton.addEventListener("click", () => {
  counter.resetCount();
  printCount();
});

bottom.scrollIntoView(); //Mobile browser hack
setInterval(mode, 1000);
