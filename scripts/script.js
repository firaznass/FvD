// JavaScript Document
console.log("hi");


/* hamburger menu van codepen 2-buttons opdracht */
var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("header nav:first-of-type button");
var deNav = document.querySelector("nav:first-of-type");

// console.log(openButton);

openButton.addEventListener("click", openMenu);

function openMenu() {
    deNav.classList.add("toonMenu");
}

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    deNav.classList.remove("toonMenu");
}
