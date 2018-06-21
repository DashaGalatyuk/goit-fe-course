'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userInput = '';
let attempts = 0;
let passwordTrue = false;
do {
    userInput = prompt('Введите пароль ');
    attempts++;
    for(let element of passwords){
        if (element == userInput) {
          passwordTrue = true;
          break;
        }
    }
} while (!passwordTrue&&attempts<3);

if (passwordTrue) {
    alert('Добро пожаловать!');
}else {
  alert('У Вас закончились попытки, аккаунт заблокирован!')
}
