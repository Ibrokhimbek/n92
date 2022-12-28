const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 300,
  // loop: true,
  centeredSlides: true,

  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
