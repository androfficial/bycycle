const body   = document.querySelector('body');
const burger = document.querySelector('.menu__icon');
const menu   = document.querySelector('.menu__body');

burger.addEventListener('click', () => {
   body.classList.toggle('_lock');
   burger.classList.toggle('_active');
   menu.classList.toggle('_active');
});
new Swiper('.slider__body', {
	// Optional parameters
	loop: true,
	autoHeight: true,
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  //dynamicBullets: true,
	},

 });