import * as windowMac from './window.js';
import * as ctaButton from './ctaButton.js'


// global scripts
const clock = document.querySelector('#clock');

const displayClock = () => {
    const date = new Date();
    return date.toLocaleTimeString( { hour: '2-digit', minute: '2-digit' });
}

clock.innerText = displayClock();

setInterval(() => {
    clock.innerText = displayClock();
}, 1000);


console.log("Hello and welcome to the console!");
console.log("Are you just curious, or are you an old classmate maybe?")
console.log("Admit it! you're here to see if i haven't cleaned up my code from console.logs!!");
console.log("either way, i appriciate you and of course there are easter eggs. here's your reward:");

