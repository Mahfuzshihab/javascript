const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const methods = document.querySelectorAll(".delivery");
const names = document.querySelector("#customerName");
const seeOrderButton = document.querySelector("#seeOrder");
const orderSummary = document.querySelector("#orderSummary");
const summaryText = document.querySelector("#summaryText");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const calculateTotal = () => {
  let totalPrice = parseFloat(pancakeType.value);

  console.log(totalPrice);

  toppings.forEach((topping) => {
    if (topping.checked) {
      totalPrice += parseFloat(topping.value);
    }
  });
  extras.forEach((extra) => {
    if (extra.checked) {
      totalPrice += parseFloat(extra.value);
    }
  });

  methods.forEach((delivery) => {
    if (delivery.checked) {
      totalPrice += parseFloat(delivery.value);
    }
  });

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener("change", calculateTotal);
toppings.forEach((topping) =>
  topping.addEventListener("change", calculateTotal)
);
extras.forEach((extra) => extra.addEventListener("change", calculateTotal));
methods.forEach((delivery) =>
  delivery.addEventListener("change", calculateTotal)
);

seeOrderButton.addEventListener("click", () => {
  const customerName = names.value.trim();

  if (customerName) {
    summaryText.innerHTML = `Thank you, ${customerName}!<br>Your order is ready.`;
  } else {
    summaryText.innerHTML = "Please enter your name to see the order summary.";
  }

  orderSummary.style.display = "block";
});
