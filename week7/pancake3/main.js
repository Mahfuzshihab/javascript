const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const deliveryOptions = document.querySelectorAll(".delivery");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");

const changeHandler = () => {
  const firstPrice = Number(pancakeType.value);
  const toppingsTotal = [...document.querySelectorAll(".topping:checked")].reduce((sum, toppingCheckbox) => sum + Number(toppingCheckbox.value), 0);
  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce((sum, extraCheckbox) => sum + Number(extraCheckbox.value), 0);

  let deliveryPrice = 0;
  deliveryOptions.forEach((deliveryOption) => {
    if (deliveryOption.checked) {
      deliveryPrice = Number(deliveryOption.value);
    }
  });

  const totalPrice = firstPrice + toppingsTotal + extrasTotal + deliveryPrice;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeType.addEventListener("change", changeHandler);
toppings.forEach(toppingCheckbox => toppingCheckbox.addEventListener("change", changeHandler));
extras.forEach(extraCheckbox => extraCheckbox.addEventListener("change", changeHandler));
deliveryOptions.forEach(deliveryOption => deliveryOption.addEventListener("change", changeHandler));

// Handle the "See Orders" button click
document.addEventListener("DOMContentLoaded", () => {
  const seeOrderButton = document.getElementById("seeOrder");

  seeOrderButton.addEventListener("click", () => {
    const customerName = document.getElementById("customerName").value.trim();
    if (!customerName) {
      alert("Please Enter Your Name");
      return;
    }

    const orderId = Date.now();

    const selectedPancake = pancakeType.options[pancakeType.selectedIndex].text;

    const selectedToppings = [...document.querySelectorAll(".topping:checked")]
      .map(toppingCheckbox => toppingCheckbox.parentElement.textContent.trim());

    const selectedExtras = [...document.querySelectorAll(".extra:checked")]
      .map(extraCheckbox => extraCheckbox.parentElement.textContent.trim());

    const selectedDelivery = [...deliveryOptions].find(deliveryOption => deliveryOption.checked)?.parentElement.textContent.trim();

    const totalPrice = parseFloat(totalPriceDisplay.textContent);

    const new_Order = {
      id: orderId,
      customerName,
      selectedPancake,
      toppings: selectedToppings,
      extras: selectedExtras,
      deliveryMethod: selectedDelivery,
      totalPrice,
      status: "waiting" 
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(new_Order);

    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "index2.html";
  });
});

