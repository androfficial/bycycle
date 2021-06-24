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
AOS.init();
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   let error = checkValueInput(form);
   if (error === 0) {
      alert('Спасибо за подписку!');
   } else {
      alert('Пожалуйста, заполните поля.');
   }
});

const checkValueInput = (form) => { 
   let error = 0;
   const inputs = form.querySelectorAll('._req');

   for (let input of inputs) {
      input.classList.remove('_error');
      if (input.value === '') {
         input.classList.add('_error');
         input.addEventListener('input', () => {
            if (input.value.length > 0) {
               input.classList.remove('_error');
            } else {
               input.classList.add('_error');
            }
         });
         error++;
      }
   }

   return error;
};