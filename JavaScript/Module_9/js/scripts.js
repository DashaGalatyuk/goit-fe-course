'use strict';

const clockFace = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const takeLap = document.querySelector('.js-take-lap');
const reset = document.querySelector('.js-reset');

let milisecond;
let seconds;
let minutes;
let startTime = Date.now();
let deltaTime = 0;


const timer = {
    timerId: null,
    isActive: false,
    startTime() {
        if (!this.isActive) {
            this.isActive = true;
            this.timerId = setInterval(() =>{
                const currentTime = Date.now();

                deltaTime = currentTime - startTime;
                const time = new Date(deltaTime);
                minutes = time.getMinutes();
                seconds = time.getSeconds();
                milisecond = Number.parseInt(time.getMilliseconds() / 100);


                minutes < 10 ? minutes = '0' + minutes : minutes;
                seconds < 10 ? seconds = '0' + seconds : seconds;
                clockFace.textContent = `${minutes}:${seconds}.${milisecond}`;
            }, 100);
            start.textContent = 'Pause';

        } else {
            this.isActive = false;
            clearInterval(this.timerId);
            clockFace.textContent = `${minutes}:${seconds}:${milisecond}`;
            start.textContent = 'Continue';
        }
    },
    resetTime(){
        clearInterval(this.timerId);
        this.isActive = false;
        deltaTime = 0;
        startTime = Date.now();
        const currentTime = Date.now();
        deltaTime = currentTime - startTime;
        const time = new Date(deltaTime);
        minutes = '0' + time.getMinutes();
        seconds = '0' + time.getSeconds();
        milisecond = '0' + time.getMilliseconds();
        clockFace.textContent = `${minutes}:${seconds}:${milisecond}`;
        start.textContent = 'Start';
    }
}

const ul = document.querySelector('.js-laps');
const timeArray = [];

function takeLapUl(){
    timeArray.push(clockFace.textContent);
    const li = document.createElement('li');
    ul.append(li);
    li.append(clockFace.textContent);
    console.log(timeArray);
}




start.addEventListener('click', timer.startTime.bind(timer));
reset.addEventListener('click', timer.resetTime.bind(timer));
takeLap.addEventListener('click',takeLapUl);






// pauseTime(){
//     clearInterval(this.timerId);
//     this.isActive = false;
//     const currentTime = Date.now();
//     deltaTime = currentTime - startTime;
//     const time = new Date(deltaTime);
//     minutes = '0' + time.getMinutes();
//     seconds = '0' + time.getSeconds();
//     milisecond = '0' + time.getMilliseconds();
//     clockFace.textContent = `${minutes}:${seconds}:${milisecond}`;
//     console.log('reset');





// const timer = {
//     timerId: null,
//     value: 0,
//     isActive: false,
//     startTime() {
//         if (!this.isActive) {
//             this.isActive = true;
//             this.timerId = setInterval(() =>{
//                 const currentTime = Date.now();
//
//             delayTime = currentTime - start
//
//             this.value += 1;
//             clockFace.textContent = this.value;
//         }, 1000);
//             // start.textContent = 'Pause';
//             // console.log('start');
//             console.log(this.timerId);
//         }
//     },
//     resetTime(){
//         this.isActive = false;
//         clearInterval(this.timerId);
//         this.value = 0;
//         clockFace.textContent = this.value;
//         console.log('reset');
//     }
// }