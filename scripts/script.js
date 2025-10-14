// JavaScript Document
console.log("hi");


/* hamburger menu van codepen 2-buttons opdracht */
var openButton = document.querySelector("header nav button");

openButton.onclick = openMenu;

function openMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.add("ToonMenu");
}
