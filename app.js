const buyPrice = document.querySelector('#buyprice');
const totalQuantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#currprice');
const calcButton = document.querySelector('#calcbutton');
const result = document.querySelector('#outputtxt');

calcButton.addEventListener('click', showResult);

function showResult() {
  var buy = Number(buyPrice.value);
  var current = Number(currentPrice.value);
  var quantity = Number(totalQuantity.value);

  if (buy < 0 || current < 0 || quantity < 0)
    result.innerText = 'Input cant be negative! Enter a positive value.';
  else if (
    buyPrice.value === '' ||
    currentPrice.value === '' ||
    totalQuantity.value === ''
  )
    alert('Please enter all the values to calculate!');
  else if (buy > current) {
    var loss = buy - current;
    var lossAmt = loss * quantity;
    var lossPercentage = Math.trunc((loss / buy) * 100);
    result.innerText = `You made a loss of ₹${loss}. Your investement is ${lossPercentage}% down🔻`;
  } else if (current > buy) {
    var profit = current - buy;
    var proAmt = profit * quantity;
    var profitPercentage = Math.trunc((profit / buy) * 100);
    result.innerText = `Wohoo, you made a profit of ₹${proAmt}. Your gains are ${profitPercentage}% 🤑`;
  }
  //no profit-no loss
  else result.innerText = 'No gains so far, no pain neither!';
}
