/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let name = "Rebekah";
  let age = 80;

  // conditional rendering
  // if ...
  // render this
  // else
  // render that

  let string = `<div>My name is ${name}. I am ${age} years old.</div>`;
  let canVote = ``;

  canVote =
    age >= 18
      ? `<div>I will be voting in November.</div>`
      : `<div>I am too young to vote.</div>`;

  document.querySelector(".demo").innerHTML = `${string} ${canVote}`;
};
