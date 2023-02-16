function cartElementAdjustment(elementId,isPlus) {
  const elementNumberField = document.getElementById(elementId);
  
  
  const elementNumberString = elementNumberField.value;
  const previousElementNumber = parseInt(elementNumberString);
  if (isPlus) {
    const currentElementNumber = previousElementNumber + 1;
    elementNumberField.value = currentElementNumber;

  } 
  else {
    if (previousElementNumber > 0) {
      const currentElementNumber = previousElementNumber - 1;
      elementNumberField.value = currentElementNumber;
    }
  }
  return elementNumberField.value;
}

function elementPriceUsingProductNumber(elementId,productNumber,price){
    const totalElementPriceAmount= document.getElementById(elementId);
    const totalPrice= productNumber*price;
    totalElementPriceAmount.innerText=totalPrice;
} 

document.getElementById("btn-case-plus").addEventListener("click", function () {
    const caseBuyCount = cartElementAdjustment('case-number-field',true);
    elementPriceUsingProductNumber('total-case-price-amount',caseBuyCount,59)
});
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const caseBuyCount = cartElementAdjustment('case-number-field',false);
    elementPriceUsingProductNumber('total-case-price-amount',caseBuyCount,59)
});

document.getElementById("btn-phone-plus").addEventListener("click", function () {
    const phoneBuyCount = cartElementAdjustment('phone-number-field', true);
    elementPriceUsingProductNumber('total-phone-price-amount',phoneBuyCount,1219)
});
document.getElementById("btn-phone-minus").addEventListener("click", function () {
    const phoneBuyCount = cartElementAdjustment('phone-number-field',false);
    elementPriceUsingProductNumber('total-phone-price-amount',phoneBuyCount,1219)
});

