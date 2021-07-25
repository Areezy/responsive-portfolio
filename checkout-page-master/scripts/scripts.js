document.body.onload = populateCountriesSelect;
document.forms.myForm.addEventListener("submit", onSubmit);

let shipping = 19;

const countrySelectDropDown = document.getElementById("country");

const firstPlusButton = document.querySelector(".first-plus-button");

const secondPlusButton = document.querySelector(".second-plus-button");

const firstMinusButton = document.querySelector(".first-minus-button");

const secondMinusButton = document.querySelector(".second-minus-button");

const totalItemCost = document.querySelector(".total-price");

firstPlusButton.addEventListener(
  "click",
  function () {
    incrementItemCount.call(this, firstPlusButton.previousElementSibling);
  },
  false
);

firstMinusButton.addEventListener(
  "click",
  function () {
    decrementItemCount.call(this, firstMinusButton.nextElementSibling);
  },
  false
);

secondPlusButton.addEventListener(
  "click",
  function () {
    incrementItemCount.call(this, secondPlusButton.previousElementSibling);
  },
  false
);

secondMinusButton.addEventListener(
  "click",
  function () {
    decrementItemCount.call(this, secondMinusButton.nextElementSibling);
  },
  false
);

const totalPrice = document.querySelector(".total-item-cost");

const prices = document.querySelectorAll(".discounted-price");
const itemAmount = document.querySelectorAll(".item-amount");

// could probably have written this a bit more readable but who doesnt love a little bit of functional programming and ES6 every now and then
// const calculateTotalPrice = [...prices].reduce((acc, curr) => {
//         return acc + Number(curr.innerText.substring(1));
//     }, shipping);

const totalValue = () => {
  let totalAmount = shipping;
  let totalPieces = [];
  let itemPrices = [];
  itemAmount.forEach((item) => {
    totalPieces.push(item.value);
  });

  prices.forEach((item) => {
    itemPrices.push(Number(item.innerText.substring(1)));
  });

  for (var i = 0; i < itemAmount.length; i++) {
    totalAmount = totalAmount + totalPieces[i] * itemPrices[i];
  }

  totalAmount = totalAmount.toFixed(2);
  totalAmount = "$" + totalAmount;
  totalItemCost.innerHTML = totalAmount;
};

firstMinusButton.nextElementSibling.addEventListener("change", totalValue);

secondMinusButton.nextElementSibling.addEventListener("change", totalValue);

function incrementItemCount(inputField) {
  inputField.value = Number(inputField.value) + 1;
  totalValue();
}

function decrementItemCount(inputField) {
  inputField.value = inputField.value == 1 ? 1 : Number(inputField.value) - 1;
  totalValue();
}

async function populateCountriesSelect() {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  result = await res.json();

  result.map(({ name }) => {
    let countryOption = document.createElement("option");
    countryOption.value = name;
    countryOption.innerHTML = name;

    countrySelectDropDown.appendChild(countryOption);

    // say no to memory leaks!
    countryOption = "";
  });
}

function onSubmit() {
  alert("Thank you for trying the form!");
}
