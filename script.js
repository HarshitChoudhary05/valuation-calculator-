





function calculate() {
  var amount = document.getElementById("amount").value;
  var equity = document.getElementById("equity").value;

  // Check if amount and equity are filled
  if (!amount || !equity) {
    alert("Please fill in all fields.");
    return;
  }

  // Check if amount is a valid number greater than zero
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount greater than zero.");
    return;
  }

  // Check if equity is a valid number between 0 and 100
  if (isNaN(equity) || equity < 0 || equity > 100) {
    alert("Please enter a valid equity percentage between 0 and 100.");
    return;
  }

  var valuation = amount / (equity / 100);
  document.getElementById("valuation").value = valuation;
}
