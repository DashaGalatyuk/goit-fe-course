'use strict';

function exchange(){
  //курс UAH
  let UAHinUSD = amount/26;
  let UAHinEUR = amount/30;
  //курс USD
  let USDinUAH = amount*26;
  let USDinEUR = amount*0.86;
  //курс EUR
  let EURinUAH = amount*31;
  let EURinUSD = amount*1.16;
  function exchangeMission(MoneyHave,MoneyWant){
    if (MoneyHave ==='uah'&&MoneyWant==='usd'){
      return alert(Math.floor(UAHinUSD));
    }
    else if (MoneyHave ==='uah'&&MoneyWant==='eur') {
      return alert(Math.floor(UAHinEUR));
    }
    else if (MoneyHave ==='usd'&&MoneyWant==='uah') {
      return alert(Math.floor(USDinUAH));
    }
    else if (MoneyHave ==='usd'&&MoneyWant==='eur') {
      return alert(Math.floor(USDinEUR));
    }
    else if (MoneyHave ==='eur'&&MoneyWant==='uah') {
      return alert(Math.floor(EURinUAH));
    }
    else if (MoneyHave ==='eur'&&MoneyWant==='usd') {
      return alert(Math.floor(EURinUSD));
    }
    else {
      return alert('Ошибка!Введите валюту uah/usd/eur');
    }
  }
  return exchangeMission;
 }
let currencyHave = prompt('Введите свою валюту');
let currencyWant = prompt('Введите в какую валюту хотите перевети деньги');
let amount = +prompt('Какая сумма для конвертации');

if(amount>0){
  amount = Math.floor(amount);
  currencyHave = currencyHave.toLowerCase();
  currencyWant = currencyWant.toLowerCase();
  let userExchange = exchange();
  userExchange(currencyHave,currencyWant);
}
else {
  alert('Ошибка!Введите сумму денег')
}
