'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userInput = '';
let attempts = 0;
let passwordTrue = false;
do {
    userInput = prompt('Введите пароль ');
    attempts++;
    for(let i=0;i<passwords.length;i++){
        if (passwords[i] == userInput) {
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
