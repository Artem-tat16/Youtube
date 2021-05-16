const swiper = new Swiper('.channel-slider', {
  // Optional parameters
 loop: true, // означает что слайды будут перелистоваться если даже закончились (слайдер зациклен)
 slidesPerView: 1, // отображает на странице сразу 6 слайдеров. Если не указывать это свойство, то по умолчанию будет отображаться один слайдер
 spaceBetween: 20, // Расстояние между слайдерами
 breakpoints: { // Назначаем условие, сколько слайдов будет показываться при разных разрешениях экрана
  1900: {
    slidesPerView: 6
  },
   1600: {
    slidesPerView: 5
   },
   1300: {
    slidesPerView: 4
  },
  1100: {
    slidesPerView: 3
  },
  760: {
    slidesPerView: 2
  }
 },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const swiper2 = new Swiper('.channel-slider-recommended', {
  // Optional parameters
 loop: true, // означает что слайды будут перелистоваться если даже закончились (слайдер зациклен)
 slidesPerView: 1,
 spaceBetween: 30,
 breakpoints: {
  1500: {
    slidesPerView: 3
  },
  1000: {
    slidesPerView: 2
  }
}, 
 // Navigation arrows
  navigation: {
    nextEl: '.channel-button-recommended-next',
    prevEl: '.channel-button-recommended-prev',
  },
});
const swiper3 = new Swiper('.channel-slider-3', {
  // Optional parameters
 loop: true, // означает что слайды будут перелистоваться если даже закончились (слайдер зациклен)
 slidesPerView: 1, // отображает на странице сразу 6 слайдеров. Если не указывать это свойство, то по умолчанию будет отображаться один слайдер
 spaceBetween: 20,
 breakpoints: {
  1900: {
    slidesPerView: 6
  },
   1600: {
    slidesPerView: 5
   },
   1300: {
    slidesPerView: 4
  },
  1100: {
    slidesPerView: 3
  },
  760: {
    slidesPerView: 2
  }
 },
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-3-next',
    prevEl: '.channel-button-3-prev',
  }
});
const searchBtn = document.querySelector('.mobile-search'); // При нажатии на иконку поиска будет показываться строка поиска
const mobileSearch = document.querySelector('.group-input');
searchBtn.addEventListener ('click', () =>{
  mobileSearch.classList.toggle('is-open');
});

if(document.documentElement.scrollWidth <=640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();

}

