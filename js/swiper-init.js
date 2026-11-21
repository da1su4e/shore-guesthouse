const thumbsSwiper = new Swiper('.thumbs', {
   slidesPerView: 4,
   spaceBetween: 16,
   watchSlidesProgress: true,
});

const mainSwiper = new Swiper('.main', {
   rewind: true,
   navigation: {
      prevEl: '.gallery-prev',
      nextEl: '.gallery-next',
   },
   thumbs: {
      swiper: thumbsSwiper,
   },
});