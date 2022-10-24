const buyPrice = document.querySelector('#buyprice');
const totalQuantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#currprice');
const calcButton = document.querySelector('#calcbutton');
const result = document.querySelector('.outputtxt');

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
    var lossAmount = loss * quantity;
    var lossPercent = Math.trunc((loss / buy) * 100);
    loss = Math.trunc(loss);
    result.classList.add('loss');
    result.innerText = `You made a loss of ₹${(
      Math.round(lossAmount * 100) / 100
    ).toFixed(2)}. Your investement is ${(
      Math.round(lossPercent * 100) / 100
    ).toFixed(2)}% down💔`;
  } else if (current > buy) {
    var profit = current - buy;
    var profitAmount = profit * quantity;
    var profitPercent = (profit / buy) * 100;
    result.classList.add('profit');
    result.innerText = `You made a profit of ₹${(
      Math.round(profitAmount * 100) / 100
    ).toFixed(2)}. Your gains are ${(
      Math.round(profitPercent * 100) / 100
    ).toFixed(2)}%💚`;
  }
  //no profit-no loss
  else result.innerText = 'No gains so far, no pain neither!';
}
