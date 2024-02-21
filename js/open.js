// Script on piece available

let leftMinus = document.querySelector(".quantity-left-minus");
let inputNumber = document.querySelector(".input-number");
let rightPlus = document.querySelector(".quantity-right-plus");

let inputeValue = inputNumber.value;

leftMinus.addEventListener("click", function() {
    inputeValue--;
    inputNumber.value = inputeValue;
});

rightPlus.addEventListener("click", function() {
    inputeValue++;
    inputNumber.value = inputeValue;
});