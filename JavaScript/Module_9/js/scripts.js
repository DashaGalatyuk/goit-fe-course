'use strict';

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

const clockFace = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const takeLap = document.querySelector('.js-take-lap');
const reset = document.querySelector('.js-reset');

const ul = document.querySelector('.js-laps');
const timeArray = [];

let count = 0;

const timer = {
    timerId: null,
    isActive: false,
    startTime() {
        if (!this.isActive){
            this.isActive = true;
            this.timerId = setInterval(() =>{
                count += 1;
                miliseconds = Math.floor(count);
                seconds = Math.floor(count/10);
                minutes = Math.floor(count/10/60);

                miliseconds = miliseconds % 10;
                seconds = seconds % 60;
                minutes = minutes % 24;

                miliseconds = miliseconds<10 ? '0' + miliseconds: miliseconds;
                seconds = seconds<10 ? '0' + seconds: seconds;
                minutes = minutes< 10 ? '0' + minutes: minutes;
                start.textContent = 'Pause';

                clockFace.textContent = `${minutes}:${seconds}:${miliseconds}`;
            },100);
        } else {
            this.isActive = false;
            clearInterval(this.timerId);
            clockFace.textContent = `${minutes}:${seconds}:${miliseconds}`;
            start.textContent = 'Continue';
        }
    },
    resetTime(){
        clearInterval(this.timerId);
        this.isActive = false;
        count = 0;
        miliseconds = 0;
        seconds = 0;
        minutes = 0;
        clockFace.textContent = `0${minutes}:0${seconds}:0${miliseconds}`;
        start.textContent = 'Start';
},
    takeLapUl(){
        timeArray.push(clockFace.textContent);
        const li = document.createElement('li');
        ul.append(li);
        li.append(clockFace.textContent);
        console.log(timeArray);
    },
}

start.addEventListener('click', timer.startTime.bind(timer));
reset.addEventListener('click', timer.resetTime.bind(timer));
takeLap.addEventListener('click',timer.takeLapUl.bind(timer));


