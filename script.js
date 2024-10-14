import * as windowMac from "./window.js";
import * as ctaButton from "./ctaButton.js";

let anchor = document.createElement("a");
anchor.href = "http://www.google.com";
console.dir(anchor);
console.log("anchor origin: ", anchor.origin);

// GLOBAL SCRIPTS

// clock
const clock = document.querySelector("#clock");

const displayClock = () => {
  const date = new Date();
  return date.toLocaleTimeString({ hour: "2-digit", minute: "2-digit" });
};

clock.innerText = displayClock();

setInterval(() => {
  clock.innerText = displayClock();
}, 1000);

// my age
const ageNumber = document.querySelector("#myAge");

const setMyAge = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return currentYear - 1989;
};
ageNumber.innerHTML = `<li>Age: ${setMyAge()}`;

// EXAMPLE FROM MDN
// to make buttons enter-able, will go for everything with the role of link
// will not however work for my close and minimize btns. untested
const btnsWithLink = document.querySelectorAll('[role="link"]');

for (let i = 0; i < btnsWithLink.length; i++) {
  btnsWithLink[i].addEventListener("click", navigateLink);
  btnsWithLink[i].addEventListener("keydown", navigateLink);
}

//handles clicks and keydowns on the link
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}

console.log("Hello and welcome to the console!");
console.log("Are you just curious, or are you an old classmate maybe?");
console.log(
  "Admit it! you're here to see if i haven't cleaned up my code from console.logs!!"
);
console.log(
  "either way, i appriciate you and of course there are easter eggs. here's your reward:"
);

console.log(
  "Correction: There's no Easter egg yet. Think of it as an unresolved promise—like a poorly typed fetch request or that bicycle you were supposed to get for your 6th birthday from your estranged dad. :/"
);
