let previousValue = document.getElementById("previousValue");
let ItemRemaining = document.getElementById("ItemRemaining");
function addItem() {
  console.log(num);
  let meao = document.getElementById("inputBox").value;
  if (num == meao) {
    console.log("done");
  } else {
    // console.log("not");
    for (let index = 0; index < 3; index++) {
      previousValue.innerHTML = "previous guess :" + meao;
    }
    for (let fuki = 9; fuki >= 0; fuki--) {
      ItemRemaining.innerHTML = "guess remaining :" + fuki;
    //   break;
    }
  }
}
// function for random number
let num;
function randNumb() {
  return (num = Math.floor(Math.random() * 10));
}
randNumb();
