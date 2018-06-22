'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
let userInputLogin = '';
let userInputPassword = '';

userInputLogin = prompt('Введите логин ');
if(userInputLogin === ADMIN_LOGIN){
    userInputPassword = prompt('Введите пароль ');
    if(userInputPassword === ADMIN_PASSWORD){
      alert('Добро пожаловать!');

    }
    else if (userInput === null) {
      alert('Отменено пользователем!');

    }
    else {
      alert('Доступ запрещён');

    }
  }
else if (userInputLogin === null){
    alert('Отменено пользователем!');

  }
else{
    alert('Доступ запрещён');

  }
