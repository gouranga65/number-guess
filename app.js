const randNumber = Math.floor(Math.random() * 100) + 1;
console.log(randNumber);
let previousValue = document.getElementById("previousValue");
let ItemRemaining = document.getElementById("ItemRemaining");
let submit = document.getElementById("subt");
let numGuess = 0;
let prevGuess = [];
submit.addEventListener("click", function () {
  let inputBox = document.getElementById("inputBox").value;
  if (randNumber === inputBox) {
    console.log("match");
  } else {
    prevGuess.push(+inputBox);
    previousValue.innerHTML = `previous guess :${prevGuess}`;
    numGuess++;
    ItemRemaining.innerHTML = `guess remaining :${3 - numGuess}`;
    if (numGuess == 3) {
      submit.setAttribute("disabled", "");
      console.log("disable");
    }
  }
});
