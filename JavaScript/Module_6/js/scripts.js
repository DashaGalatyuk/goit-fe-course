'use strict';



class Hamburger {
   constructor(size, stuffing){
     this._size = size;
     this._stuffing = stuffing;
     this._topping = [];
}



  addTopping(topping) {
    this._topping.includes(topping)?`This topping is allready included`:this._topping.push(topping);
  }
  removeTopping(topping){
    this._topping.includes(topping)?this._topping = this._topping.filter(item => item!== topping):'этой добавки у Вас в списке нету';
  }

  get toppings(){
    return this._topping;
  }

  get size() {
    return this._size;
  }

  get stuffing() {
    return this._stuffing;
  }
  calculatePrice() {
    let priceTopping = this._topping.map( item => Hamburger.TOPPINGS[item].price).reduce((acc,item) => acc+item,0);

    let calculate = Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + priceTopping;
    return calculate;
  }
  calculateCalories() {
    let caloriesTopping = this._topping.map( item => Hamburger.TOPPINGS[item].calories).reduce((acc,item) => acc+item,0);

    let calculateCaloriesArr = Hamburger.SIZES[this.size].calories + Hamburger.STUFFINGS[this.stuffing].calories + caloriesTopping;
    return calculateCaloriesArr;
  }
}


Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE'


  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        name: 'SIZE_SMALL',
        price: 30,
        calories: 50,
    },
     [Hamburger.SIZE_LARGE]: {
         name: 'SIZE_LARGE',
         price: 50,
         calories: 100,
     }
  };
  Hamburger.STUFFINGS = {
     [Hamburger.STUFFING_CHEESE]:{
      name: 'STUFFING_CHEESE',
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]:{
      name: 'STUFFING_SALAD',
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]:{
      name: 'STUFFING_MEAT',
      price: 35,
      calories: 15,
    },
  },
  Hamburger.TOPPINGS = {
     [Hamburger.TOPPING_SPICE]:{
      name: 'TOPPING_SPICE',
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]:{
      name: 'TOPPING_SAUCE',
      price: 15,
      calories: 5,
    },
  }


/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1

/*
  🔔 Обратите внимание на такие моменты:
    	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
    		другой код, а класс живет в изоляции от мира

    	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
		чтобы нельзя было создать объект, не указав их

    	✔️ необязательные (добавка) добавляем через методы

    	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")

    	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.

    	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
      		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
		логично в тот момент, когда это потребуется, а не заранее.
*/
