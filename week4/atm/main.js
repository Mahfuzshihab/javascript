const balance = document.getElementById("balance");
const deposit_amount = document.getElementById("deposit-amount");
const deposit_btn = document.getElementById("deposit-btn");
const withdraw_amount = document.getElementById("withdraw-amount");
const withdraw_btn = document.getElementById("withdraw-btn");
const message = document.getElementById("message");

let mainBalance = 0;

const deposit = () => {
  const depositValue = Number(deposit_amount.value);
  if (isNaN(depositValue) || depositValue <= 0) {
    (message.textContent = "Enter a valid number."), true;
    deposit_amount.value = "";
    message.style.color = "red";
    return;
  }
  mainBalance += depositValue;
  balance.textContent = mainBalance;
  message.textContent = `Deposited ${depositValue} € successfully!`;
  message.style.color = "green";
  deposit_amount.value = "";
};
deposit_btn.addEventListener("click", deposit);

const withdraw = () => {
  const withdrawValue = Number(withdraw_amount.value);
  if (isNaN(withdrawValue) || withdrawValue < 0) {
    (message.textContent = "Enter a valid amount"), true;
    withdraw_amount.value = "";
    message.style.color = "red";
    return;
  }

  if (withdrawValue > mainBalance) {
    (message.textContent = "Not enough balance"), true;
    message.style.color = "red";
    return;
  }
  mainBalance -= withdrawValue;
  balance.textContent = mainBalance;
  message.textContent = `Withdrawn ${withdrawValue} € successfully! main balance now ${mainBalance}`;
  message.style.color = "red";
  withdraw_amount.value = "";
};
withdraw_btn.addEventListener("click", withdraw);
