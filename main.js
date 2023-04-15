"use strict";

const navbar = document.querySelector('#navbar');
const navbar1 = document.querySelector('#navbar1');
const myBtn = document.querySelector('#myBtn');
const myBtnValue = document.querySelector('#myBtn-value');



window.onscroll = function() {scrollFunction(), calcScrollValue()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    navbar.style.top = "0";
    navbar1.style.top = "-100px";
    navbar.classList.add('opacity-100')
  } 
  else {
      navbar.style.top = "-100px";
      navbar1.style.top = "0";
}

}

// For smooth scroll button 
let calcScrollValue = () => {
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100){
    myBtn.style.display = "grid";
  }
  else{
    myBtn.style.display = "none";
  }
  myBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  myBtn.style.background = `conic-gradient(#c49b66 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

}

window.onload = calcScrollValue;



// const items = document.querySelectorAll('[data-portfolio-item]');
const grid = document.querySelector('.grid-item');
const buttons = document.querySelectorAll('#portfolio-btns button');

const iso = new Isotope( grid, {
	itemSelector: '[data-portfolio-item]',
	// layoutMode: 'fitRows',
	layoutMode: 'masonry',
  persentPosition: true,
});


buttons.forEach(btn => {
  btn.addEventListener('click', ()=>{
    buttons.forEach(btn => {
      btn.classList.remove('activeBtn')
    })

    btn.classList.add('activeBtn')
    const selector = btn.dataset.filter
    console.log(selector)

		iso.arrange({filter: selector})
  })
})
