'use strict';
// console.clear();
// Magic header
// const  = document.querySelector('');
// window.addEventListener('scroll', fixing);
// function fixing() {
//    if (scrollY <= .getBoundingClientRect().height * 2) {
//       .style.transform = `translate(0,-${scrollY}px)`;
//       .classList.remove('p');
//    } else {
//       .classList.add('p');
//    }
// }

const lessThanButton = document.querySelector('.warning__cross');
const topNavbar = document.querySelector('.top-nav');
lessThanButton.addEventListener('click', function (e) {
   e.preventDefault();
   const warning = lessThanButton.closest('.warning');
   warning.classList.add('close_');
   topNavbar.classList.remove('paddingTop_');
});

const element = document.querySelectorAll('.navbar__item[data-da]');
if (document.documentElement.clientWidth < 767) {
	element.forEach((el) => {
		el.removeAttribute('data-da');
      el.classList.remove('_dynamic_adapt_');
		console.log(el);
   });
}
