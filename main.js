"use strict";

const navbar = document.querySelector('#navbar');
const navbar1 = document.querySelector('#navbar1');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    navbar.style.top = "0";
    navbar1.style.top = "-100px";

  } 
  else {
      navbar.style.top = "-100px";
      navbar1.style.top = "0";
}
  console.log(`de:${document.documentElement.scrollTop}\nb: ${document.body.scrollTop}`)
}