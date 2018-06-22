'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;
let needPlace = 0;

function confirmGroupPlace(){
  return alert('Приятного путешествия в этой группе');
}
function NoPlaceInGroup(){
  return alert('Нету мест в группе');
}
function NoAnotherGroups(){
  return alert('Извените, нету других групп');
}

needPlace = +prompt('Введите число необходимых мест ');
needPlace = Math.round(needPlace);
if (needPlace>0) {

  if (needPlace<= taba) {
    if(confirm('Есть места в группе taba, Вам она подходит?')){
      confirmGroupPlace();
    }
    else {
      if(confirm('Есть места в группе sharm, Вам она подходит?')){
      confirmGroupPlace();
      }
      else {
        if(confirm('Есть места в группе hurgada, Вам она подходит?')){
          confirmGroupPlace();
        }
        else {
          NoAnotherGroups();
        }
      }
    }
  }


  else if(needPlace<= sharm) {
    if(confirm('Есть места в группе sharm, Вам она подходит?')){
      confirmGroupPlace();
    }
    else {
      if(confirm('Есть места в группе hurgada, Вам она подходит?')){
        confirmGroupPlace();
      }
      else {
        NoAnotherGroups();
      }
    }
  }



  else if(needPlace<= hurgada) {
    if(confirm('Есть места в группе hurgada, Вам она подходит?')){
      confirmGroupPlace();
    }
    else {
      NoAnotherGroups();
    }
  }

  else {
    alert('Нам очень жаль, приходите еще')
  }
}
else {
  alert('Ошибка ввода');
}
