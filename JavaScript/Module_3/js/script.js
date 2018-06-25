'use strict';

const UserLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let UserLogin  = prompt('Введите логин ');

/*---FUNCTION checkLoginValidity---*/

/*
function checkLoginValidity(login){
  if(login.length>=4 && login.length<=16){
    return true;
  }
  else {
    return false;
  }
}
*/
let checkLoginValidity = (login) => login.length>=4 && login.length<=16;

/*---FUNCTION checkIfLoginExists---*/

/*
function checkIfLoginExists(logins,login){
  if(logins.includes(login)===true){
    return true;
  }
  else {
    return false;
  }
}
*/

let checkIfLoginExists = (logins,login) => logins.includes(login);


function addLogin(logins,login){
  if (checkLoginValidity(login)){
    if (checkIfLoginExists(logins,login)){
      alert('Такой логин уже используется!');
    }
    else {
      logins.push(login);
      alert('Логин успешно добавлен!');
    }
  }
  else {
    alert('Ошибка! Логин должен быть от 4 до 16 символов');
  }
}

addLogin(UserLogins,UserLogin);
