const lowerAlex = document.getElementById("lowerAlex");
const upAlex = document.getElementById("upAlex");

let countAlex = 0;
let decreaseAlex = () => {
  countAlex--;
};

let increaseAlex = () => {
  countAlex++;
};
const lowerAlexCount = () => {
  decreaseAlex();
  document.getElementById("counterAlex").textContent = countAlex;
};

const upAlexCount = () => {
  increaseAlex();
  document.getElementById("counterAlex").textContent = countAlex;
};

lowerAlex.addEventListener("click", lowerAlexCount);
upAlex.addEventListener("click", upAlexCount);

//John
const lowerJohn = document.getElementById("lowerJohn");
const upJohn = document.getElementById("upJohn");

let countJohn = 0;

let decreaseJohn = () => {
  countJohn--;
};

let increaseJohn = () => {
  countJohn++;
};
const lowerJohnCount = () => {
  decreaseJohn();
  document.getElementById("counterJohn").textContent = countJohn;
};

const upJohnCount = () => {
  increaseJohn();
  document.getElementById("counterJohn").textContent = countJohn;
};

lowerJohn.addEventListener("click", lowerJohnCount);
upJohn.addEventListener("click", upJohnCount);
