
const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    }

trafficLightEl.addEventListener('click', makeGreen);

const trafficLightE2 = document.querySelector('#trafficLight2');

function makeYellow2() {
    trafficLightE2.style.background = ('yellow');
    trafficLightEl.style.background = ('black');
    trafficLightE3.style.background = ('black');
}
trafficLightE2.addEventListener('click', makeYellow2);

const trafficLightE3 = document.querySelector('#trafficLight3');

function makeRed3() {
    trafficLightE3.style.background = ('red');
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
}

trafficLightE3.addEventListener('click', makeRed3);